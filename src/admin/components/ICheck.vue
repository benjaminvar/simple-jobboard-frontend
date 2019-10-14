<template>
  <div class="checkbox-blue">
    <input type="checkbox" :id="id" :disabled="disabled" @change="emitInput" v-model="content" />
    <label :for="id">
      <slot></slot>
    </label>
  </div>
</template>
<style lang="scss" scoped>
$size: 22px;
.checkbox-blue {
  position: relative;
  line-height: $size;
  input[type="checkbox"] {
    display: none;
  }
  label {
    padding-left: $size + 5px;
  }

  //Square checkbox
  label::before {
    content: "";
    position: absolute;
    left: 0px;
    display: inline-block;
    width: $size;
    height: $size;
    border: 1px solid #ccc;
  }
  //Check Symbol
  label::after {
    content: "✓";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: $size;
    line-height: $size;
    height: $size;
    text-align: center;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    transform: scale(0);
    transition: transform ease 0.2s;
  }

  label:hover::before {
    cursor: pointer;
    border: 2px solid #2489c5;
  }

  input[type="checkbox"]:checked + label::before {
    background-color: #2489c5;
    border: 2px solid #2489c5;
  }
  input[type="checkbox"]:checked + label::after {
    transform: scale(1);
  }
}
</style>
<script>
export default {
  data() {
    return {
      content: this.value
    };
  },
  props: {
    id: "",
    value: false,
    disabled: false
  },
  methods: {
    emitInput() {
      this.$emit("input", this.content);
    }
  }
};
</script>