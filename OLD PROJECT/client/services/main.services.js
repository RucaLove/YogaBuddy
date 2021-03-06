(function() {
  'use strict'

  angular.module('app')
    .service('MainService', service)
  service.$inject = ['$http']

  function service($http) {

    // this.allPoses = function() { // Grabs all poses
    //   return $http.get('/poses').then(all => all.data)
    // }
    // this.$Pose = function(id) { // Grab a post by ID
    //   return $http.get(`poses/${$stateParams.id}`).then(one => one.data)
    // }

    this.newPost = function(newPost) { // Makes new post
      $http.post('/posts', newPost)
    }

    //
    // this.$del = function(id) { // Removes Post by ID
    //   $http.delete(`/posts/${$stateParams.id}`).then(d => $state.go('app.all'))
    // }
    //
    // this.$like = function(post, dir) { // Handles both likes and dislikes
    //   post.negative = false // Makes my error span pop out atcha
    //   dir == true ?
    //     $http.post(`/posts/${post.id}/likes`)
    //     .then(likes => post.likes = likes.data.likes) :
    //     (dir == false && post.likes > 0) ?
    //     $http.delete(`/posts/${post.id}/likes`)
    //     .then(dislikes => post.likes = dislikes.data.likes) :
    //     post.negative = !post.negative // makes my error pop out if they try and go past 0
    // }
    //

    //
    // this.edit = function(post) { // Patches current Post by ID
    //   $http.patch(`posts/${$stateParams.id}/`, post)
    //   $state.go('app.all')
    // }

  }
})();
