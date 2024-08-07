<script>
import emailjs from 'emailjs-com';

export default {
data() {
    return {
    form: {
        name: '',
        email: '',
        message: ''
    },
    responseMessage: ''
    };
},
methods: {
    sendEmail() {
    const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message
    };

    emailjs.send('service_n06rmyb', 'template_cw0lumu', templateParams, 'VAtNot_Tlzqrnfqg_')
        .then((response) => {
        this.responseMessage = 'E-mail enviado com sucesso!';
        // Limpa o formulário
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        })
        .catch((error) => {
        this.responseMessage = 'Erro ao enviar o e-mail. Por favor, tente novamente.';
        console.error('Erro ao enviar e-mail:', error);
        });
    }
}
};
</script>

<template>
    <div id="contato">
        <div class="row">
            <div class="col">
                <h2>
                    Contato
                </h2>
            </div>
        </div>
        <form @submit.prevent="sendEmail">
        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required placeholder="nome">
        </div>
        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required placeholder="nome@exemplo.com">
        </div>
        <div class="form-group">
            <label for="message">Mensagem:</label>
            <textarea class="form-control" id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-success">Enviar</button>
        </form>
        <div v-if="responseMessage">{{ responseMessage }}</div>
    </div>
</template>
  
<style scoped>
#contato{
    color: #ffffff;
    margin: 20px 0px;
}
button{
    margin-top: 20px;
    background-color: #3F8E00 !important;
    /* box-shadow: 0 0 25px 0.1px #62BA1B; */
}
label {
    padding: 8px 0;
}
</style>