import NewsModel from '../models/news';

class NewsController {
  index(req, res) {
    NewsModel.find().then((err, news) => {
      if (err) {
        return res.send(err);
      }

      res.json(news);
    });
  }

  create(req, res) {
    const data = req.body;

    const news = new NewsModel({
      title: data.title,
      text: data.text,
    });

    news.save().then(() => {
      res.send({ status: 'ok' });
    });
  }

  read(req, res) {
    NewsModel.findOne({ _id: req.params.id }).then((news) => {
      if (!news) {
        res.send({ error: 'Not found' });
      } else {
        res.join(news);
      }
    });
  }

  update(req, res) {
    NewsModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
      if (err) {
        return res.send(err);
      }
      res.json({ status: 'updated' });
    });
  }

  delete(req, res) {
    NewsModel.remove({
      _id: req.params.id,
    }).then((news) => {
      if (news) {
        res.json({ status: 'deleted' });
      } else {
        res.json({ status: 'error' });
      }
    });
  }
}

export default NewsController;
