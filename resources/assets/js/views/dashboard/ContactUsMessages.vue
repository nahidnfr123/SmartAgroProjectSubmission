<template>
    <div class="content-body">
        <section class="row">
            <div class="col-sm-12">

                <!-- What is-->
                <div id="what-is" class="card">
                    <div class="card-header">
                        <h4 class="card-title">Contact us messages</h4>
                    </div>
                    <div class="card-content collapse show">
                        <div class="card-body">
                            <div class="card-text">

                                <div class="row mb-2">
                                    <div v-if="messages && Object.keys(messages).length">
                                        <div v-for="message in messages" :key="message.id"
                                             class="shadow rounded p-2 m-2 d-flex justify-content-between align-items-center flex-wrap">
                                            <div class="mb-1">
                                                <div><strong>Name: </strong>{{ message.name }} <strong>Email: </strong>{{ message.email }}</div>
                                                <div><strong>Subject: </strong>{{ message.subject|truncate(50) }}</div>
                                                <div><strong>Message: </strong>{{ message.message|truncate(50) }}</div>
                                            </div>
                                            <div class="btn-group">
                                                <button class="btn btn-sm btn-success" title="View" @click="viewMessages(message.id)"><i class="fas fa-eye"></i></button>
                                                <button class="btn btn-sm btn-warning" title="Reply"><i class="fas fa-reply"></i></button>
                                                <button class="btn btn-sm btn-danger" title="Delete" @click="deleteMessage(message.id)"><i class="fas fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="alert alert-info text-center">
                                            No contact messages found.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!--/ What is-->
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "ContactUsMessages",
    data() {
        return {
            messages: {},
            errors: {},
        }
    },
    activated() {
        this.getContactUsMessages();
    },
    methods: {
        async getContactUsMessages() {
            await axios.get('api/contact').then((res) => {
                this.messages = res.data;
            }).catch((err) => {
                this.errors = err.response.data;
                this.$store.dispatch('snackbar/addSnack', {color: 'danger', msg: this.errors, snakbarType: 'Error'}, {root: true});
            });
        },
        viewMessages(contact_message_id){

        },
        deleteMessage(contact_message_id) {
            axios.delete(`api/contact/${contact_message_id}`).then((res) => {
                this.messages.filter(obj => {
                    return res.data.id != obj.id;
                });
                this.$store.dispatch('snackbar/addSnack', {color: 'success', msg: 'Message deleted.', snakbarType: 'Success'}, {root: true});
            }).catch((err) => {
                this.errors = err.response.data;
                this.$store.dispatch('snackbar/addSnack', {color: 'danger', msg: this.errors, snakbarType: 'Error'}, {root: true});
            });
        }
    }
}
</script>

<style scoped>

</style>
