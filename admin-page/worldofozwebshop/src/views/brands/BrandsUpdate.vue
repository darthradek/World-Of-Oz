<template>
    <div>
        <h1 class="heading">Update Brand</h1>
        <h2 class="brand_info">({{brand.id}}: {{brand.name}})</h2>
        <div>
            <div class="fields_container">
                <div class="prompt">
                    New Name:
                </div>
                <input class="field" spellcheck="false" v-model="brand.name" type="text">
            </div>
            <div class="actionbutton_container">
                <div class="update_button" v-on:click="updateBrand">
                    UPDATE
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted(){
            this.brand = this.readBrand(this.$route.params.brandId);
        },

        data: () => ({
            brand: ''
        }),

        methods: {
            readBrand(id) {
                axios.get('http://world-of-oz.azurewebsites.net/api/brands/' + id)
                    .then((response) => {
                        this.brand = response.data;
                    });
            },
            updateBrand() {
                axios.put('http://world-of-oz.azurewebsites.net/api/brands/' + this.brand.id, {
                    id: this.brand.id,
                    name: this.brand.name
                }).then(() => {
                    alert("Brand \"" + this.brand.id + ": " + this.brand.name + "\" successfully updated");
                    this.$router.replace('/brands');
                });
            }
        }
    }
</script>

<style scoped>

    .heading{
        color: #4CB690;
        font-size: 45px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .brand_info {
        margin-top: -40px;
        margin-bottom: 30px;
        color:  #38896c;
    }

    .fields_container{
        background-color: #11242D;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .prompt{
        font-size: 22px;
        color:#4CB690;
    }

    .field {
        font-size: 15px;
        width: 300px;
        border: 3px solid #4CB690;
        padding: 5px;
        height: 20px;
        border-radius: 5px 5px 5px 5px;
        outline: none;
        color:#4CB690;
        background-color:#11242D;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 25px;
        margin-right: 25px;
    }

    .actionbutton_container {
        width: 100%;
        height: 100px;
        display:flex;
        justify-content:center;
        align-items: center;
        text-decoration: none;
    }

    .update_button{
        margin-left: 0px;
        width: 180px;
        font-size: 30px;
        color: #4CB690;
        border: #4CB690 3px solid;
        display:flex;
        justify-content:center;
        align-items: center;
    }

    .update_button:hover{
        transform: scale(1.125);
        transition: all 0.2s ease 0s;
        cursor: pointer;
    }

</style>