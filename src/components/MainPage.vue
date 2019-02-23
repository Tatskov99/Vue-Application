<template>
    <div>
        <form class="input-group mt-5">
            <input type="text" class="form-control" placeholder="Добавить сериал..." v-model="title">
            <span>
                <button class="btn btn-secondary" @click="addSerial"> 
                Добавить
                </button>
            </span>
        </form>
        <ol class="mt-5">
            <li v-for="(serial, index ) in serials" :key="serial" @click="removeSerial(index)">

            </li>
        </ol>
        <div class="mt-5">
       <button class="btn btn-primary"> Выбрать случайный сериал</button>
                <h2 class="mt-3 mb-3"></h2>
                <button class="btn btn-primary">
                        Выбраный сериал просмотрен
                </button>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'main-page',
    data(){
        return {
            title: '',
            data:{
                serials:[],
                currentSerial: 'He vbran...',
                numberOfCurrentSerial: null

            }
        }
    },
    props: ['uid'],
    methods:{
        addSerial(){
            if(this.title){
                   this.data.serials.push(this.title);
            }
         this.title = '';
        },
        removeSerial(index){
            this.data.serials.splice(index, 1);
        }
    }
}
</script>