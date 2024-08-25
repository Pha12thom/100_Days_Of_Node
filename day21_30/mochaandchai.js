const env = process.env.NODE_ENV || 'development';
if(env === 'test'){
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
} else {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
}
mongoose.connect(process.env.MONGODB_URI);