<template>
  <div class="rounded border jobs-wrap">
    <JobItem v-for="job in jobs" :key="job.id" :job="job"></JobItem>
  </div>
</template>
<script>
import JobItem from "./JobItem.vue";
import { mapState } from "vuex";
export default {
  name: "JobList",
  components: {
    JobItem
  },
  data() {
    return {};
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.data;
    }
  }
};
</script>