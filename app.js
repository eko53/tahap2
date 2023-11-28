const app = Vue.createApp
({
  data() 
  {
    return { hitung: 0, nama: '' }; },
  
  methods: 
  {
    clear ()
    {
      this.hitung = 0 , this.nama = '' , this.inputValue = '' ; },

    
    siapa (event, lastName)
    {
      this.nama = event.target.value + ' ' + lastName; },


    devide (num)
    {
      this.hitung /= num; },


    multiply (num)
    {
      this.hitung *= num; },


    add (num)
    {
      this.hitung += num; },
      

    reduce (num)
    {
      this.hitung -= num; } 
  }
});

app.mount('#eko');

mrasyid
diysarm