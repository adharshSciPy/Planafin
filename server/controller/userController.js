import { User } from "../model/userSchema.js";
import { Contact } from "../model/contactSchema.js";
import { JobOpening } from "../model/jobopeningSchema.js";
import { Feedback } from "../model/feedbackSchema.js";
import { JobApplication } from "../model/jobApplication.js";
import { OnDemand } from "../model/onDemandSchema.js";
import { Journey } from "../model/journeySchema.js";
import { WatchNow } from "../model/watchnowSchema.js";
import { Employee } from "../model/employeeSchema.js";
import { Customer } from "../model/customerSchema.js";
import { Project } from "../model/projectSchema.js";
import { Solution } from "../model/solutionSchema.js";
import { Industry } from "../model/industrySchema.js";
import SolutionAccelerators from "../model/solutionAccelerators.js";
import { passwordValidator } from "../utils/passwordValidator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";


const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // sanitiasing inputs
    const isEmptyFields = [userName, email, password].some(
      (field) => field === "" || field === undefined
    );
    if (isEmptyFields) {
      return res.status(401).json({ message: "All fields are required" });
    }

    //validate password
    const isValidPassword = passwordValidator(password);
    console.log(isValidPassword);

    if (!isValidPassword) {
      return res.status(401).json({
        message:
          "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number",
      });
    }
    const isAlreadyExistingUser = await User.findOne({ email: email });
    if (isAlreadyExistingUser) {
      return res.status(409).json({ message: "Email is already in use" });
    }
    const saltRounds = 10; // Higher rounds mean stronger but slower hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const role = process.env.ADMIN_ROLE;
    //user creation
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      role
    });
    const createdUser = await User.findOne({ _id: user._id }).select("-password");

    return res.status(200).json({
      message: "User Registration Successful",
      user: createdUser,
    });


    // if (!createdUser) {
    //   return res.status(500).json({ message: "User registration failed" });
    // }

    // return res.status(201).json({ message: "User Registration Successful" ,user});
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Internal Server due to ${err.message}` });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }
    /*  */
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email doesn't exist" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Use environment variable for security
      { expiresIn: "1d" } // Token expires in 1 hour
    );

    return res.status(200).json({
      message: "Login Successful",
      token,
      role: process.env.ADMIN_ROLE
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Internal Server Error due to ${err.message}` });
  }
};

const ContactUs = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    country,
    phone,
    jobTitle,
    company,
    message,
  } = req.body;
  try {
    const result = await Contact.create({
      firstName,
      lastName,
      email,
      country,
      phone,
      jobTitle,
      company,
      message,
    });
    res.status(200).json({ message: "Successfully Created", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Internal Server Error`, data: error.message });
  }
};

const ContactDetails = async (req, res) => {
  try {
    const result = await Contact.find();
    res.status(200).json({ message: "Successfully Fetched", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const ContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Contact.findById(id);
    res.status(200).json({ message: "Successfully Fetched", data: result })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const jobOpenings = async (req, res) => {
  const { title, location, workSchedule, workTime, requiredSkills, jobType } = req.body;
  try {
    const result = await JobOpening.create({
      title,
      location,
      workSchedule,
      workTime,
      requiredSkills,
      jobType,
    });
    res
      .status(200)
      .json({ message: "Jobs Created Successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const jobListing = async (req, res) => {
  try {
    const result = await JobOpening.find();
    res.status(200).json({ message: "Jobs Listed Successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const addFeedback = async (req, res) => {
  try {
    const { name, jobPosition, message } = req.body;
    let image = req.file ? req.file.path : null;

    if (image) {
      image = image.replace(/\\/g, "/");
    }

    if (!name || !jobPosition || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const result = await Feedback.create({
      image,
      name,
      jobPosition,
      message,
    });
    res.status(200).json({ message: "Feedback Received", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const viewFeedback = async (req, res) => {
  try {
    const result = await Feedback.find();
    res.status(200).json({ message: "Feedback Viewed", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: error })
  }
}

const jobApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      company,
      currentCompany,
      linkedIn,
      xUrl,
      github,
      portfolio,
      information,
    } = req.body;
    let resume = req.file ? req.file.path : null;

    // Convert Windows-style paths to URL-friendly format
    if (resume) {
      resume = resume.replace(/\\/g, "/");
    }

    if (!firstName || !lastName || !email || !phone || !jobTitle || !company) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const result = await JobApplication.create({
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      company,
      resume,
      currentCompany,
      linkedIn,
      xUrl,
      github,
      portfolio,
      information,
    });
    res.status(200).json({ message: "Application Received", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const applicationDetails = async (req, res) => {
  try {
    const result = await JobApplication.find();
    res.status(200).json({ message: "Applications Viewed", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", data: error.message });
  }
};

const deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await JobApplication.findByIdAndDelete(id);
    res.status(200).json({ message: "Application deleted successfully", data: result });
  } catch (error) {
    res.status(200).json({ message: "Internal server error", error: error.message })
  }
}

const onDemand = async (req, res) => {
  try {
    const { title, summary, pigment, speaker, attendSession } = req.body;
    let image = "";

    if (req.file) {
      image = `uploads/${req.file.filename}`; // Fix Windows backslashes
    } else {
      console.log("⚠️ No file uploaded!");
    }

    console.log("📷 Uploaded Image Path:", image);
    console.log("📦 Form Data:", req.body);

    const result = await OnDemand.create({
      title,
      summary,
      pigment,
      speaker,
      attendSession,
      image,
    });

    res
      .status(200)
      .json({ message: "On Demand Session Created", data: result });
  } catch (error) {
    console.error("🔥 Image Upload Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getOnDemandById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await OnDemand.findById(id);
    res
      .status(200)
      .json({ message: "On Demand Sessions Viewed", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
const getemployeeData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await JobApplication.findById(id);
    res.status(200).json({ message: "employee Data", data: result })
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
const demandDetails = async (req, res) => {
  try {
    const result = await OnDemand.find().select("image title summary id");
    res
      .status(200)
      .json({ message: "On Demand Sessions Viewed", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deleteDemand = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await OnDemand.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Delete Ondemand Successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const addJourney = async (req, res) => {
  try {
    const { year, title, description } = req.body;
    const result = await Journey.create({
      year,
      title,
      description,
    });
    res.status(200).json({ message: "Journey Created", data: result });
  } catch (error) {
    res.status(200).json({ message: "Journey Created", error: error.message });
  }
};

const journeyDetails = async (req, res) => {
  try {
    const result = await Journey.find();
    res.status(200).json({ message: "Journeys Viewed", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deleteJourney = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Journey.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Delete Journey Successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const addWatchnow = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      businessEmail,
      companyName,
      designation,
      selectCountry,
    } = req.body;
    const result = await WatchNow.create({
      firstName,
      lastName,
      businessEmail,
      companyName,
      designation,
      selectCountry,
    });
    res.status(200).json({ message: "Watch Now Form Submitted", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const watchNowDetails = async (req, res) => {
  try {
    const result = await WatchNow.find();
    res.status(200).json({ message: "Watch Now Details", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const watchnowDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteddata = await WatchNow.findByIdAndDelete(id)
    res.status(200).json({ message: "Deleted Successfully", data: deleteddata });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const profileImage = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const filePaths = req.files.map((file) => ({
      id: uuidv4(), // Generate a unique ID for each image
      path: `/uploads/${file.filename}`,
    }));

    // Assuming the employee is authenticated, otherwise you could fetch the employee info another way
    const employeeId = req.body._id; // Assuming req.body contains the employee's ID

    if (!employeeId) {
      // If no employeeId is provided, you are creating a new employee
      const newEmployee = new Employee({
        profileImg: filePaths, // Set the uploaded images as profile images
      });

      const savedEmployee = await newEmployee.save();
      return res.status(200).json({
        message: "New Employee Created and Images Uploaded",
        data: savedEmployee,
      });
    }

    // Check if the employee exists
    let employee = await Employee.findById(employeeId);

    if (employee) {
      // If the employee exists, push the new image paths to the existing array
      employee.profileImg = [...employee.profileImg, ...filePaths]; // Add new images to the existing array
      await employee.save(); // Save the updated employee data
      return res
        .status(200)
        .json({ message: "Profile Images Updated", data: employee });
    } else {
      return res.status(400).json({ message: "Employee not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const employeeDetails = async (req, res) => {
  try {
    const employeedata = await Employee.find()
    res.status(200).json({ message: "Employee Data Fetched", data: employeedata })
  } catch (error) {
    res.status(500).json({ message: "INternal Server Error", error: error.message })
  }
}

const deleteProfileImage = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await Employee.findByIdAndDelete(id)
    res.status(200).json({ message: "Image Removed", data: result })
  } catch (error) {
    res.status(500).json({ message: "Intenal Server Error", error: error.message })
  }
}

const customerImage = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const filePaths = req.files.map((file) => ({
      id: uuidv4(), // Generate a unique ID for each image
      path: `/uploads/${file.filename}`,
    }));

    // Assuming the customer is authenticated, otherwise you could fetch the customer info another way
    const customerId = req.body._id; // Assuming req.body contains the customer's ID

    if (!customerId) {
      // If no customerId is provided, you are creating a new customer
      const newCustomer = new Customer({
        imageCustomer: filePaths, // Set the uploaded images as profile images
      });

      const savedCustomer = await newCustomer.save();
      return res.status(200).json({
        message: "New Customer Created and Images Uploaded",
        data: savedCustomer,
      });
    }

    // Check if the customer exists
    let customer = await Customer.findById(customerId);

    if (customer) {
      // If the customer exists, push the new image paths to the existing array
      customer.imageCustomer = [...customer.imageCustomer, ...filePaths]; // Add new images to the existing array
      await customer.save(); // Save the updated customer data
      return res
        .status(200)
        .json({ message: "Customer Images Updated", data: customer });
    } else {
      return res.status(400).json({ message: "Customer not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const customerDetails = async (req, res) => {
  try {
    const customerdata = await Customer.find()
    res.status(200).json({ message: "Customer Fetched Successfully", data: customerdata })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const deleteCustomerImage = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await Customer.findByIdAndDelete(id)
    res.status(200).json({ message: "Image Removed", data: result })
  } catch (error) {
    res.status(500).json({ message: "Intenal Server Error", error: error.message })
  }
}

const deleteJobopenings = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await JobOpening.findByIdAndDelete(id);
    res.status(200).json({ message: "Openings deleted successfully", data: result })
  } catch (error) {
    res.status(500).json({ message: "Intenal Server Error", error: error.message })
  }
}

const projectUpdate = async (req, res) => {
  const { consultants, projects, cases } = req.body;
  try {
    const result = await Project.findOneAndUpdate(
      {}, // Match condition — empty means it'll match the first document
      {
        $set: { consultants, projects, cases },
      },
      {
        new: true,     // Return the updated document
        upsert: true,  // Create it if it doesn't exist
      }
    );
    res.status(200).json({ message: "Count Updated", data: result })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })

  }
}

const viewProject = async (req, res) => {
  try {
    const result = await Project.find()
    res.status(200).json({ message: "Project Details", data: result })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const solution = async (req, res) => {
  const { heading, description, descriptionPoints } = req.body
  try {
    const result = await Solution.create({ heading, description, descriptionPoints });
    res.status(200).json({ message: "Solution Created Successfully", data: result })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const solutionDetails = async (req, res) => {
  try {
    const solutiondeatils = await Solution.find()
    res.status(200).json({ message: "Solution Details Fetched", data: solutiondeatils })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const solutionById = async (req, res) => {
  const { id } = req.params
  try {
    const solutionresult = await Solution.findById(id)
    res.status(200).json({ message: "Solution Fetched", data: solutionresult })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const deleteSolution = async (req, res) => {
  const { id } = req.params
  try {
    const solutionresult = await Solution.findByIdAndDelete(id)
    res.status(200).json({ message: "Solution Deleted", data: solutionresult })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const industryImage = async (req, res) => {
  try {
    const { heading } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const filePaths = req.files.map((file) => ({
      id: uuidv4(), // Generate a unique ID for each image
      path: `/uploads/${file.filename}`,
    }));

    // Assuming the industry is authenticated, otherwise you could fetch the industry info another way
    const industryId = req.body._id; // Assuming req.body contains the industry's ID

    if (!industryId) {
      // If no industryId is provided, you are creating a new industry
      const newIndustry = new Industry({
        heading,
        industryImage: filePaths, // Set the uploaded images as profile images
      });

      const savedIndustry = await newIndustry.save();
      return res.status(200).json({
        message: "New Industry Created and Images Uploaded",
        data: savedIndustry,
      });
    }

    // Check if the industry exists
    let industry = await Industry.findById(industryId);

    if (industry) {
      // If the industry exists, push the new image paths to the existing array
      industry.industryImage = [...industry.industryImage, ...filePaths]; // Add new images to the existing array
      await industry.save(); // Save the updated industry data
      return res
        .status(200)
        .json({ message: "Industry Images Updated", data: industry });
    } else {
      return res.status(400).json({ message: "Industry not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const industryDetails = async (req, res) => {
  try {
    const industrydata = await Industry.find()
    res.status(200).json({ message: "Industry Fetched Successfully", data: industrydata })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}

const deleteIndustry = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await Industry.findByIdAndDelete(id)
    res.status(200).json({ message: "Image Removed", data: result })
  } catch (error) {
    res.status(500).json({ message: "Intenal Server Error", error: error.message })
  }
}

const addAccelerationSolutions = async (req, res) => {
  try {
    const { title, features } = req.body;
    if (!title || !features || !Array.isArray(features)) {
      return res.status(400).json({ message: "Title and features array are required." });
    }
    const formattedFeatures = features.map(feature => ({ features: feature }));
    const newSolution = new SolutionAccelerators({
      title,
      features: formattedFeatures
    });
    await newSolution.save();
    res.status(201).json({
      message: "Solution Accelerator created successfully!",
      data: newSolution
    });
  } catch (error) {
    console.error("Error adding solution accelerator:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }

}
const getAccelerationSolutions = async (req, res) => {
  try {
    const allAccelerationSolutions = await SolutionAccelerators.find();

    res.status(200).json({
      message: "Fetched all Solution Accelerators successfully",
      data: allAccelerationSolutions
    });
  } catch (error) {
    console.error("Error fetching solution accelerators:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteAccelerationSolutions = async (req, res) => {
  try {
    const { id } = req.query;


    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }


    const deletedData = await SolutionAccelerators.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Solution Accelerator not found" });
    }

    res.status(200).json({
      message: "Solution Accelerator deleted successfully",
      data: deletedData
    });

  } catch (error) {
    console.error("Error deleting solution accelerator:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export {
  registerUser, loginUser, ContactUs, ContactDetails, jobOpenings, jobListing, addFeedback, viewFeedback, jobApplication, applicationDetails, onDemand, getOnDemandById, demandDetails,
  addJourney, journeyDetails, addWatchnow, watchNowDetails, profileImage, deleteDemand, deleteJourney, deleteFeedback, deleteProfileImage, customerImage, deleteCustomerImage,
  deleteJobopenings, deleteApplication, ContactById, getemployeeData, employeeDetails, customerDetails, watchnowDelete, projectUpdate, viewProject, solution, solutionDetails,
  solutionById, deleteSolution, industryImage, industryDetails, deleteIndustry, addAccelerationSolutions, getAccelerationSolutions, deleteAccelerationSolutions
}
