import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  postNum: number = 0;

  posts : Array<any> = [
    {
      title: 'Blog Post One',
      image: './assets/images/image2.jpg',
      date: '3/08/21',
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris. At auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc non blandit. Dui sapien eget mi proin sed libero. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare massa eget. A condimentum vitae sapien pellentesque habitant. Cras tincidunt lobortis feugiat vivamus at augue. Habitant morbi tristique senectus et. Consectetur purus ut faucibus pulvinar elementum integer enim. Iaculis urna id volutpat lacus laoreet non curabitur. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Velit sed ullamcorper morbi tincidunt ornare massa eget. Quis blandit turpis cursus in hac. Elementum facilisis leo vel fringilla. Tincidunt arcu non sodales neque sodales ut etiam sit. Vitae nunc sed velit dignissim sodales ut eu. Et malesuada fames ac turpis egestas integer.<br><br>

      Tortor dignissim convallis aenean et tortor at risus viverra.Vivamus at augue eget arcu.Rhoncus est pellentesque elit ullamcorper dignissim cras.Gravida dictum fusce ut placerat orci nulla pellentesque.Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.Id aliquet risus feugiat in ante metus dictum.Sagittis vitae et leo duis ut.Diam vulputate ut pharetra sit amet aliquam id diam maecenas.Imperdiet nulla malesuada pellentesque elit eget.Maecenas pharetra convallis posuere morbi leo urna molestie at.Eros donec ac odio tempor orci dapibus ultrices.Et ultrices neque ornare aenean.Interdum velit laoreet id donec.Dolor sit amet consectetur adipiscing elit pellentesque.Eleifend donec pretium vulputate sapien nec sagittis.Facilisi etiam dignissim diam quis enim lobortis.Imperdiet dui accumsan sit amet.Non tellus orci ac auctor augue mauris augue neque gravida.Maecenas sed enim ut sem viverra aliquet.Mauris pharetra et ultrices neque ornare aenean. <br><br>Dictum varius duis at consectetur.Sed velit dignissim sodales ut eu.Id leo in vitae turpis massa sed elementum.Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.Sed nisi lacus sed viverra tellus in hac habitasse platea.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.Fermentum et sollicitudin ac orci phasellus egestas.Maecenas volutpat blandit aliquam etiam.Risus viverra adipiscing at in.Tellus pellentesque eu tincidunt tortor aliquam.Imperdiet sed euismod nisi porta lorem mollis aliquam ut.Quam viverra orci sagittis eu volutpat odio facilisis mauris.Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.Id diam vel quam elementum pulvinar.Neque gravida in fermentum et sollicitudin ac orci phasellus.Mattis aliquam faucibus purus in massa tempor.Pellentesque elit eget gravida cum sociis natoque penatibus.Elementum nibh tellus molestie nunc non blandit massa enim.<br><br>
      
      Sagittis vitae et leo duis ut diam quam nulla.Sit amet aliquam id diam maecenas.Quam quisque id diam vel quam elementum.Proin sagittis nisl rhoncus mattis rhoncus urna neque.Elementum tempus egestas sed sed risus pretium quam vulputate dignissim.Orci sagittis eu volutpat odio facilisis mauris sit.Lacus laoreet non curabitur gravida arcu.Nulla at volutpat diam ut.Quam quisque id diam vel quam elementum pulvinar etiam.Netus et malesuada fames ac turpis egestas sed.Eget egestas purus viverra accumsan in.Dignissim suspendisse in est ante in nibh mauris cursus.Est pellentesque elit ullamcorper dignissim cras.Amet massa vitae tortor condimentum.Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus.Viverra nam libero justo laoreet sit amet cursus sit amet.Libero volutpat sed cras ornare.Odio tempor orci dapibus ultrices in.Leo a diam sollicitudin tempor id.<br><br>
      
      Sed risus ultricies tristique nulla aliquet enim tortor at.Est placerat in egestas erat imperdiet.Convallis aenean et tortor at.Duis at tellus at urna condimentum.In ornare quam viverra orci.Vulputate mi sit amet mauris commodo quis.Arcu ac tortor dignissim convallis aenean et tortor at.Quis ipsum suspendisse ultrices gravida dictum.Eget velit aliquet sagittis id.Ac tincidunt vitae semper quis.Ac auctor augue mauris augue.Porta lorem mollis aliquam ut.`
    },
    {
      title: 'Humans Replaced By Machines?',
      image: './assets/images/image1.jpg',
      date: '06/08/21',
      summary: `Will all of the people of the world find work? Will all of the people of the world be gainfully employed? Will all of the people of the world be needed?`,
      body: `Yet another day of reflections – too many of those lately – and thinking about generations. My parents were war parents, living through the Second World War; their parents were people growing up in Edwardian Britain as a carpenter and housewife. Things were different.<br><br>

      I don’t remember my parents struggling, although I know my grandparents did. My mum’s father spent the 1940s war living in Chatham, Kent, building ships. At that time, the dockyard was one of the major targets of bombers and bombs, but he and Grandma steadfastly refused to move out of the area. They had work, and that was the key.<br><br>

      I don’t really remember my grandfather or grandparents much, but I know they had a hard life. My mum and dad didn’t. I’m not saying they had an easy life, but it was easier than the generation before. They were both teachers. Luckily for them, teachers at a college, not a school. They taught me well.<br><br>

      So, to my generation. I’ve had a fun life, but not without challenges. Redundant twice, divorced once, lost a lot and won a lot, never sat still  and always curious. Guess that’s why I’m still passionate about life, the world, technology and money.<br><br>

      So, why would I blog about this?<br><br>

      Well, I look at my children, millennials, Generation Z and the iGeneration, and think that every generation grows up with a different skillset based upon life and circumstances. Today’s kids are probably the most able to be entrepreneurs and build businesses but, for many of them, it is the worst of times.<br><br>

      “It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair.”<br><br>

      Charles Dickens, A Tale of Two Cities<br><br>

      There are so many young folks now, struggling to find a job, make a living, keep active and involved. Yet has it not been always this way?<br><br>

      In fact, what is different today is that there are so many young growing up in societies that offer them opportunity and challenge. When I was born, showing my age, the world had less than half the population of peoples that the world has today.<br><br>

      Today, we are approaching 8 billion people in the world.<br><br>

      8,000,000,000.<br><br>

      EIGHT BILLION.<br><br>

      Will all of the people of the world find work? Will all of the people of the world be gainfully employed? Will all of the people of the world be needed?<br><br>

      I wonder.<br><br>

      Yet then, as I blogged about the other day, we need to teach children the things that machines cannot learn.<br><br>

      Think about it.<br><br>

      When today’s generation grow up, they will not have a job anything like the jobs we had. Carpenters, shopkeepers, teachers … many will be replaced by machines.<br><br>

      But the one thing a machine cannot replace is humanity.<br><br>

      Humanity is what we are. Humans. That’s you and me.<br><br>

      We have emotions, relationships, tantrums, fears, excitement, love, hate, hope … we are not machines.<br><br>

      So, when I look at my kids, I have hope.<br><br>

      They may grow up in a world richer, freer, happier than me and my parents and grandparents, but even if they don’t, they will know they have been loved. And isn’t that the most important thing of all?`
    },
    
  ];





  getPosts() : Array<any>{
    return this.posts;
  }

  selectedIndex(i : number ) : void{
    this.postNum = i;
  }
}
