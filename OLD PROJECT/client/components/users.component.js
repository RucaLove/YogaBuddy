(function() {
    'use strict'

    angular.module('app')
        .component('users', {
            templateUrl: '/templates/users.template.html',
            controller: UsersController
        })

    UsersController.$inject = ['UsersServices', '$stateParams', '$state']

    function UsersController(UsersServices, $stateParams, $state) {
        // console.log('in users controller fn')
        const vm = this
        vm.$onInit = onInit
        // vm.likes = likes
        // vm.sort = sort
        // vm.sortPosts = sortPosts

        function onInit(id) {
            let id = $stateParams.id
            UsersServices.$User(id) // Grabs one user
                .then((all) => {
                    // console.log('all: ', all)
                    vm.users = all
                })
        }

        // function sortPosts() {
        //   UsersServices.sorted()
        //       .then((all) => {
        //         return all
        //       })
        // }
        //
        // function sort() { // WORKS BUT YOU HAVE TO CLICK IT
        //   UsersServices.sorted()
        //   .then((all) => {
        //     vm.users = all
        //   })
        // }

        // function likes(user, dir) {
        //   UsersServices.$like(user, dir) // Like functionality
        // }

    } // END CONTROLLER
})()
