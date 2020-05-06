<template>
  <form
    id="form"
    :ref="formRefName"
  >
    <div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Título do Curso:</div>
        <DxTextBox
          value=""
          name="titulo"
          class="dx-field-value"
        />
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Descrição:</div>
        <DxTextBox
          name="descricao"
          value=""
          class="dx-field-value"
        />
      </div>
      <div class="dx-field">
        <div class="dx-field-label">URL:</div>
        <DxTextBox
          name="url"
          value="http://"
          class="dx-field-value"
        />
      </div>
    </div>
    <div class="fileuploader-container" 
        id="image"
        @mouseenter="toggleDefault"
        @mouseleave="toggleDefault"> 
      <DxFileUploader
        select-button-text="Selecione a capa"
        name="image"
        label-text=""
        accept="image/*"
        upload-mode="useForm"
      />
      <DxTooltip
        :visible.sync="defaultVisible"
        :close-on-outside-click="false"
        :target="'#image'"
      >
        Defina aqui a imagem inicial do seu vídeo
      </DxTooltip>
    </div>
    <DxButton
      class="button"
      text="SALVAR"
      type="success"
      @click="onButtonClick"
    />
  </form>
</template>
<script>
import { DxFileUploader } from 'devextreme-vue/file-uploader';
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxButton } from 'devextreme-vue/button';
import { DxTooltip } from 'devextreme-vue/tooltip';
import notify from 'devextreme/ui/notify';
import api from '../../services/api'

export default {
  components: {
    DxFileUploader,
    DxTextBox,
    DxButton,
    DxTooltip
  },
  data() {
    return {
        defaultVisible: false,
        formRefName: 'tree-view'
    };
  },
  methods: {
    onButtonClick() {
      notify('ENVIANDO O FORMULÁRIO.');
      const form = this.$refs[this.formRefName];
      
      let model = {
          titulo : form[0].value,
          descricao : form[1].value,
          url : form[0].value,
      }
      api.post('api', 'curso/create', model)
    },
    toggleDefault() {
      this.defaultVisible = !this.defaultVisible;
    },
  }
};
</script>
<style>
#form {
    max-width: 600px;
    margin: auto;
}

.button {
    margin-top: 50px;
    margin-right: 20px;
    float: right;
}

.fileuploader-container{
    border: 1px solid #d3d3d3;
    margin: 20px 20px 0 20px;
}

#form h3 {
    margin-left: 20px;
    font-weight: normal;
    font-size: 22px;
}
</style>
