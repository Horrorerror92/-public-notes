import mongoose, { Schema } from 'mongoose';

const NewsSchema = new Schema({

  title: String,
  text: String,
},
{
  timestamps: true,
});

const News = mongoose.model('News', NewsSchema);

export default News;
