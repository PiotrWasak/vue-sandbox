export const sandboxMixin = {
  data() {
    return {
      isAlert: false,
    };
  },
  methods: {
    toggleAlert() {
      this.isAlert = !this.isAlert;
    },
  },
};
