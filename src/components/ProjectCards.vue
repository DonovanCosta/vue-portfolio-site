<template>
    <div>
        <b-card no-body style="max-width: 20rem;" class="mb-4" >
            <b-card-img :src="src" alt="Image"></b-card-img>
            <b-card-body>
                <b-card-title>{{title}}</b-card-title>
                <b-card-text v-html="short_description"></b-card-text>
                <b-button variant="primary" :to="{ name: 'ProjectDetailView', params:  {id: project_id} }" class="card_btn">
                    Read more   
                </b-button>   
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "ProjectCards",
    props: ['title', 'src', 'short_description', 'project_id']
}
</script>

<style scoped>

.card {
    color: #333;
    width: 400px;
    height: 420px;
    border-radius: 5px;
    box-shadow: 10px 10px 10px #0077b6;
}

.card_btn {
    color: #0096c7;
    background: none;
    border: 2px solid #0096c7;
}

.card_btn:hover {
    color: #ffffff;
    background: #00b4d8;
    border: 2px solid #00b4d8;
    transition:  0.3s ease-in;
}


</style>