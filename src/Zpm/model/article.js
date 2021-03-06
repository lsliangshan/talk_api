/**
 * Created by liangshan on 2017/11/27.
 */
const Sequelize = enkel.Sequelize
module.exports = {
  safe: true,
  fields: {
    title: {
      // 文章标题
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    content: {
      // 文章的内容，不能与contentUrl(文章的内容的外链)同时为空
      type: Sequelize.TEXT,
      defaultValue: ''
    },
    contentUrl: {
      // 文章的内容的外链，不能与content(文章内容)同时为空
      type: Sequelize.STRING,
      defaultValue: ''
    },
    album: {
      // 文章封面图片
      type: Sequelize.STRING,
      defaultValue: ''
    },
    author: {
      // 文章的作者
      type: Sequelize.STRING
    },
    status: {
      // 文章的状态，1为正常显示，-1为审核不通过，0为审核中。默认为0（审核中）
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    tag: {
      // 文章标签，多个标签用 ; 号区分
      type: Sequelize.STRING,
      defaultValue: ''
    },
    postTime: {
      // 文章的发布时间
      type: Sequelize.STRING,
      defaultValue: (+new Date())
    },
    uuid: {
      // 文章的唯一id
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    updateTime: {
      // 文章的更新时间
      type: Sequelize.STRING,
      defaultValue: (+new Date())
    },
    reviewTime: {
      // 文章的审核时间
      type: Sequelize.STRING,
      defaultValue: ''
    },
    totalViews: {
      // 文章的总浏览量
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    yesterdayViews: {
      // 文章 昨日浏览量
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    todayViews: {
      // 文章  今日浏览量
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    like: {
      // 文章  点赞量
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    unlike: {
      // 文章 踩
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    category: {
      // 文章 类目
      type: Sequelize.STRING,
      defaultValue: ''
    }
  },
  relations: {

  }
};
