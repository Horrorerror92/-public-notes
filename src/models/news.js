import mongoose, {Schema}  from 'mongoose';

const NewsSchema = new Schema ({
  
  title: String,
  currentDate: String,
  text: String
},
{
  timestamps: true
}  
);

const News = mongoose.model('Post', NewsSchema);

export default News;