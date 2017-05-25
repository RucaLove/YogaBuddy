exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments()
    table.boolean('verified').defaultTo(FALSE)
    table.text('comment_text').notNullable().defaultTo('')
    table.text('comment_img').defaultTo('')
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE')
    table.integer('post_id').notNullable().references('posts.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
}
