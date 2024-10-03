<template>
    <div>
     <h1>Bài 10</h1>
     <v-container>
         <v-card>
           <v-card-title>
             <h3>Item</h3>
           </v-card-title>
           <v-card-text>
             <v-data-table
               :headers="headers"
               :items="items"
               item-key="name"
               class="elevation-1"
               :items-per-page="5"
               :pagination.sync="pagination"
             >
               <template #footer>
                 <v-row>
                   <v-col v-if="items.length" class="d-flex justify-end">
                     <v-pagination
                       v-model="pagination.page"
                       :length="totalPages"
                       @input="fetchItems"
                     ></v-pagination>
                   </v-col>
                 </v-row>
               </template>
             </v-data-table>
           </v-card-text>
         </v-card>
       </v-container>
    </div>
   </template>
   
   <script setup>
   import { ref, computed } from 'vue';
   
   const headers = [
     { text: 'Name', value: 'name' },
     { text: 'Project Name', value: 'projectName' },
     { text: 'Post', value: 'post' },
     { text: 'Status', value: 'status' },
     { text: 'Budget', value: 'budget' },
   ];
   
   const items = ref([
     { name: 'Sunil Joshi', projectName: 'Elite Admin', post: 'Web Designer', status: 'Active', budget: '$3.9' },
     { name: 'Andrew McDowland', projectName: 'Real Homes WP Theme', post: 'Project Manager', status: 'Pending', budget: '$24.5k' },
     { name: 'Christopher Jamil', projectName: 'MedicalPro WP Theme', post: 'Project Manager', status: 'Completed', budget: '$12.8k' },
     { name: 'Nirav Joshi', projectName: 'Hosting Press HTML', post: 'Frontend Engineer', status: 'Active', budget: '$2.4k' },
     { name: 'Micheal Doe', projectName: 'Helping Hands WP Theme', post: 'Content Writer', status: 'Cancel', budget: '$9.3k' },
   ]);
   
   const pagination = ref({ page: 1, rowsPerPage: 5 });
   
   const totalPages = computed(() => Math.ceil(items.value.length / pagination.value.rowsPerPage));
   
   const getStatusColor = (status) => {
     switch (status) {
       case 'Active':
         return 'green';
       case 'Pending':
         return 'orange';
       case 'Completed':
         return 'blue';
       case 'Cancel':
         return 'red';
       default:
         return 'grey';
     }
   };
   
   const fetchItems = (newPage) => {
     pagination.value.page = newPage;
   };
   
   </script>
   
   <style scoped>
   .v-card {
     margin-top: 20px;
   }
   </style>