// const router = require('express').Router();

// const heroController = require('../HeroPlayer/server/controller');
// const commentsController = require('../CommentSection/server/controller');
// const sideBarController = require('../SideBar/server/controller');
// const footerController = require('../FooterPlayer/server/controller');

// // HERO PLAYER
// router
//   .route('/heroPlayer')
//   .get(heroController.fetch);

// // COMMENTS
// router
//   .route('/comments')
//   .get(commentsController.fetchAllComments)
//   .post(commentsController.createOneComment)
//   .delete(commentsController.eraseOneComment);

// router
//   .route("/replies")
//   .get(commentsController.fetchAllCommentReplies);

// router
//   .route("/users")
//   .get(commentsController.fetchAllUsers);
  

// // SIDEBAR 
// router
//   .route('/relatedTracks')
//   .get(sideBarController.relatedTracks.get)

// router
//   .route('/playlists')
//   .get(sideBarController.playlists.get)

// router
//   .route('/usersLiked')
//   .get(sideBarController.usersLiked.get)

// router
//   .route('/usersReposts')
//   .get(sideBarController.usersReposts.get)

// // FOOTER PLAYER
// router
//   .route('/songs')
//   .get(footerController.fetch);

// module.exports = router;