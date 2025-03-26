import mongoose, { Schema } from 'mongoose'

const ourJourneySchema=new Schema({
    year:{String},
    title:{String},
    description:{String}

})


export const schemaOurJourney = new mongoose.model("ourJourney",ourJourneySchema)