(function() {
  'use strict'

  angular.module('app')
    .service('CommentsServices', service)
  service.$inject = ['$http']

  function service($http) {

    this.allComments = function(id) { // Grabs all comments per Post ID
      return $http.get(`/api/posts/${id}`).then((all) => {
        console.log(all)
        return all.data
      })
    }

    this.addComment = function(comment) { // Adds a comment to Post

    $http.post(`/api/posts/${comment.id}/comments`, comment)
    $state.reload()
  }

  }
})()
