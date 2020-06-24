<template>
    <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-4"
    >
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
</template>

<script>
export default {
    name: "ProjectCards"
}
</script>

<style scoped>

.card {
    width: 400px;
    height: 400px;
}

</style>