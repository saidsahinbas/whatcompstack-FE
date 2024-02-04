<template>
  <div>
    <h1>Open Jobs 19</h1>
    <div class="jobs">
      <ul class="job-post">
        <li
          v-for="job in paginatedJobs"
          :key="job.jobTitle"
          class="job-post-item"
        >
          <h1>{{ job.employerName }}</h1>
          <p>{{ job.date }}</p>
          <h2>{{ job.jobTitle }}</h2>
          <h3>{{ job.jobDescription }}</h3>
          <p>
            Minimum Salary:{{ job.minimumSalary }}&pound; - Maximum Salary:{{
              job.maximumSalary
            }}&pound;
          </p>
          <p>Applied Person: {{ job.applications }}</p>
          <a class="jobUrl" :href="job.jobUrl">Go to Job Link</a>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>
<script lang="js">
import data from '../store/data';
export default {
    data(){
      return{
        itemsPerPage: 20,
        currentPage:1
      }
    },
    computed:{
      jobs() {
          //console.log(this.jobs());
          return data.state.results;
      },
      totalPages(){
        return Math.ceil(this.jobs.length / this.itemsPerPage);
      },
      paginatedJobs() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.jobs.slice(start, end);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
  }
}
</script>
<style>
.h1 {
  text-align: center;
}
.jobs {
  list-style: none;
  text-align: left;
}
.job-post + .job-post-item {
  border-top: 1px solid rgba((0), 0, 0, 0.1);
}
ul {
  list-style-type: none;
  padding: 0;
  border: 2px solid #ddd;
}

ul li {
  padding: 8px 16px;
  border-bottom: 2px solid #ddd;
}

ul li:last-child {
  border-bottom: none;
}
.jobUrl {
  font-weight: bold;
  text-align: end;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  margin: 0 5px;
}
button {
  background-color: #233446;
  width: auto;
  text-align: center;
  padding: 10px;
}
</style>
