<script lang="ts">
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
});

export default {
  getProfile(user: string): object {
    return apiClient.get(`/users/${user}`);
  },
};
</script>
