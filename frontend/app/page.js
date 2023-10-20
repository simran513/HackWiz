// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

import React from 'react'
import './style.css'
const page = () => {
  return (
    <>
     <header>
        <a href="#" className="logo"><i className="fas fa-bolt"></i>Yuki.</a>
        <nav className="navbar">
             <a href="index.html">home</a>
             <a href="#anime">anime</a>
             <a href="#manga">manga</a>
             <a href="#discussion">News</a>
             <a href="#store">store</a>
        </nav>
        
        <div className="icons">
            <i className="fas fa-bars" id="menu-bars"></i>
            <i className="fas fa-search" id="search-icon"></i>
            <a href="#" className="fas fa-heart"></a>
        </div>
        <img src="https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png" id="moonicon"/>
    </header>



<section className="home" id="home">

    <div className="swiper home-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide">
                <div className="box " style="background: url(/images/home-img-1.png) no-repeat;">
                    <div className="content">
                        <h3>Kakegurui</h3>
                        <p>High roller Yumeko Jabami plans to clean house at Hyakkaou Private<br/>
                        Academy, a school where students are evaluated solely on their<br/>
                        gambling skills.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box second" style={backgroundImageUrl=('./images/home-img-3.jpg')}>
                    <div className="content">
                        <h3>DEATH NOTE</h3>
                         <p>When a Japanese high schooler comes into possession of a mystical<br/>
                        notebook, he finds he has the power to kill anybody whose name he<br/>
                        enters in it.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box " style="background: url(/images/home-img-4.jpg) no-repeat;">
                    <div className="content">
                        <h3>One-Punch Man</h3>
                         <p>The most powerful superhero in the world can kill anyone with one<br/>
                        blow. But nothing can challenge him, so he struggles with ennui and<br/>
                        depression</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box " style="background: url(/images/home-img-2.jpg) no-repeat;">
                    <div className="content">
                        <h3>Naruto</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns<br/>
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>
            </div>

        </div>

    </div>

</section>



{/* <section className="anime" id="anime">
    <h1 className="heading">Popular on Anime</h1>
    <div className="swiper anime-slider">
        <div className="swiper-wrapper">

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-1.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Naruto</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-2.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>One-Punch Man</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-3.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>DEATH NOTE</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-4.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Black Clover</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-5.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Jujutsu Kaisen</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-6.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Haikyu!!</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-7.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Kuroko's Basketball</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-8.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>My Hero Academia</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-9.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Dr. Stone</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-10.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Tokyo Revengers</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-11.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>Sword Art Online</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/anime-img-12.jpg) no-repeat;"></div>
                <div className="content">
                    <h3>KENGAN ASHURA</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="download.html" className="btn">Download</a>
                </div>
            </div>


        </div>
    </div>
</section>
 */}


<section className="action" id="action">
    <h1 className="heading">Action Movies</h1>
    <div className="swiper action-slider">
        <div className="swiper-wrapper">



                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-1.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Kuroko's Basketball</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-2.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>AHIRU NO SORA</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-3.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Seraph of the End</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-4.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Kuroko's  Last Game</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/acion-5.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Fate/Zero</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/acion-6.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Hellsing Ultimate</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-7.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>DEVILS'LINE</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="box" style="background: url(/images/action-8.jpg) no-repeat;"></div>
                    <div className="content">
                        <h3>Legend of Exorcism</h3>
                        <p>Guided by the spirit demon within him, orphaned Naruto learns
                        to harness his powers as a ninja in this anime adventure series.</p>
                        <a href="#" className="btn">Download</a>
                    </div>
                </div>



</div>
</div>
</section>



<section className="child" id="child">
    <h1 className="heading">Child Movies</h1>
    <div className="swiper child-slider">
        <div className="swiper-wrapper">

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-1.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Beyblade</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-2.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Beyblade Burst Turbo</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-3.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Bakugan: Battle Planet</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-4.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Sonic X</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-5.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Yowamushi Pedal</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-6.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Shimajiro: A Adventure</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

            <div className="swiper-slide">
                <div className="box" style="background: url(/images/child-7.jpg) no-repeat"></div>
                <div className="content">
                    <h3>Go Astro Boy Go!</h3>
                    <p>Guided by the spirit demon within him, orphaned Naruto learns
                    to harness his powers as a ninja in this anime adventure series.</p>
                    <a href="#" className="btn">Download</a>
                </div>
            </div>

        </div>
    </div>
</section>



<section className="family" id="family">
    <h1 className="heading">Family Movies</h1>
    <div className="swiper family-slider">
    <div className="swiper-wrapper">

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-1.jpg) no-repeat"></div>
            <div className="content">
                <h3>STAND BY ME Doraemon 2</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-2.jpg) no-repeat"></div>
            <div className="content">
                <h3>Pokémon the Movie</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-3.jpg) no-repeat"></div>
            <div className="content">
                <h3>Hows Moving Castle</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-4.jpg) no-repeat"></div>
            <div className="content">
                <h3>Spirited Away</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-5.jpg) no-repeat"></div>
            <div className="content">
                <h3>My Neighbor Totoro</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-6.jpg) no-repeat"></div>
            <div className="content">
                <h3>Kikis Delivery Service</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-7.jpg) no-repeat"></div>
            <div className="content">
                <h3>Ponyo</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="box" style="background: url(/images/family-8.jpg) no-repeat"></div>
            <div className="content">
                <h3>Arrietty</h3>
                <p>Guided by the spirit demon within him, orphaned Naruto learns
                to harness his powers as a ninja in this anime adventure series.</p>
                <a href="#" className="btn">Download</a>
            </div>
        </div>


    </div>
    </div>
</section>


<div className="copyright container">
    <a href="#" className="logo"><i className="fas fa-bolt"></i>Yuki.</a>
    <p>Yuki. All rights reserved.</p>
</div>

    </>
  )  
}


export default page

