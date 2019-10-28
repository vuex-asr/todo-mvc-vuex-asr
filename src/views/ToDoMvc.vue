<template>
    <div class="todo-mvc">
        <new-todo asr-bind-state="newTodo" asr-bind-actions="addTodo"/>
        <list-todos
                asr-bind-getters="todos"
                asr-bind-mutations="removeTodo"
                asr-debug
        />
    </div>
</template>

<style>
    /*div.todos {*/
        /*margin: 0 auto;*/
        /*min-width: 600px;*/
        /*max-width: 600px;*/
    /*}*/
</style>
