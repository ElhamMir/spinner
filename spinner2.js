process.stdout.write('hello from spinner1.js... \rheyyy\n');
const results = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r=   ','\r+   '];
const spin = function(results){
  let i = 100
  let j = -1
  let time;
  for(const num of results){
    j++;
      time = i + (200 * j)
    setTimeout(() => {
      
      process.stdout.write(num);
    }, time );
  }
}
spin(results)
