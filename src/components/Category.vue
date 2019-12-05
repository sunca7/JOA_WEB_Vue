<template>
<div id="container">
    <div
    v-for="category in categories"
    v-bind:key="category.id"
    class="Categories">
        <img :src="category.picture" alt="category-img">
    </div>
</div>
</template>

<script>
import db from '@/db'

export default {
    name: 'Category',
    data () {
        return {
            categories: []
        }
    },
    created() {
        db.collection('categories').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.categories.push(doc.data())
            })
        })

        
    }
}

</script>

<style lang="scss" scoped>

img {
     display: inline-block;
}


</style>