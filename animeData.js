const heroSlides = [
    {
        id: 4,
        bg: "The Elusive Samurai.jpg",
        tag: "FEATURED THIS WEEK",
        title: "The Elusive Samurai",
        desc: "A runaway heir and a town of secret warriors build the perfect revenge story.",
        rating: "8.1",
        eps: "12 Episodes",
        age: "16+"
    },
    {
        id: 2,
        bg: "Solo Leveling.jpg",
        tag: "TRENDING ACTION",
        title: "Solo Leveling",
        desc: "In a world where hunters with magical powers battle deadly monsters, a weak hunter gets a mysterious system.",
        rating: "9.1",
        eps: "12 Episodes",
        age: "16+"
    },
    {
        id: 1,
        bg: "Naruto.jpg",
        tag: "FAN FAVORITE",
        title: "Naruto",
        desc: "Naruto Uzumaki, a noisy adolescent ninja, constantly searches for approval and recognition.",
        rating: "8.8",
        eps: "220 Episodes",
        age: "13+"
    }
];

const animeDatabase = [
    {
        id: 1,
        name: "Naruto",
        title: "Naruto",
        banner: "Naruto.jpg",
        img: "Naruto.jpg",
        sub: "Hindi Dubbed",
        lang: "Hindi Dubbed",
        rating: "8.8",
        year: "2002",
        eps:"220",
        addedDate: "2024-01-01",
        latestUpdate: "Completed",
        isSeasonCompleted: true,
        desc: "Naruto Uzumaki, a noisy, hyperactive adolescent ninja, constantly searches for approval and recognition, as well as to become Hokage.",
        genres: ["Action", "Adventure"],
        genre: "Action",
        seasons: {
            s1: {
                seasonName: "Season 1",
                seasonZip: "https://terabox.com/s/naruto_season1_zip",
                episodes: [
                    { ep: 1, title: "Enter: Naruto Uzumaki!", link: "https://vidsrc.to/embed/anime/naruto/1" },
                    { ep: 2, title: "My Name is Konohamaru!", link: "https://vidsrc.to/embed/anime/naruto/2" },
                    { ep: 3, title: "Sasuke and Sakura: Friends or Foes?", link: "https://vidsrc.to/embed/anime/naruto/3" },
                    { ep: 4, title: "Pass or Fail: Survival Test", link: "https://vidsrc.to/embed/anime/naruto/4" },
                    { ep: 5, title: "You Failed! Kakashi's Final Decision", link: "https://vidsrc.to/embed/anime/naruto/5" }
                ]
            }
        }
    },
    {
        id: 2,
        name: "Solo Leveling",
        title: "Solo Leveling",
        banner: "Solo Leveling.jpg",
        img: "Solo Leveling.jpg",
        sub: "Hindi Dubbed",
        lang: "Hindi Dubbed",
        rating: "9.1",
        year: "2024",
        eps: "24",
        addedDate: "2026-09-16",
        latestUpdate: "S2 • Ep 2 Added",
        isSeasonCompleted: false,
        desc: "In a world where hunters with magical powers battle deadly monsters, a weak hunter named Sung Jinwoo is dangerously close to death when a mysterious system grants him incredible powers.",
        genres: ["Action", "Fantasy"],
        genre: "Action",
        seasons: {
            s1: {
                seasonName: "Season 1",
                seasonZip: [
                    { name: "📥 Download Ep 1-6 Zip", link: "https://hubcloud.cx/drive/hcrhyacsn4rm444" },
                    { name: "📥 Download Ep 7-12 Zip", link: "https://hubcloud.cx/drive/73t1iahey3i93yg" }
                ],
                episodes: [
                    { ep: 1, title: "I'm Used to It", link: "https://streamtape.com/e/7RWQ13pyWDFoGe/S1E01_-_1080p_-_Solo_Leveling_-_HindiDubbed4u.in.mkv" },
                    { ep: 2, title: "If I Had One More Chance", link: "https://streamtape.com/e/zwpaKKo6MWiYrZr/S1E02_-_1080p_-_Solo_Leveling_-_HindiDubbed4u.In.mkv" },
                    { ep: 3, title: "It's Like a Game", link: "https://streamtape.com/e/example3" },
                    { ep: 4, title: "I've Gotta Get Stronger", link: "https://streamtape.com/e/example4" },
                    { ep: 5, title: "A Pretty Good Deal", link: "https://streamtape.com/e/example5" },
                    { ep: 6, title: "The Real Hunt Begins", link: "https://streamtape.com/e/example6" },
                    { ep: 7, title: "Let's See How Far I Can Go", link: "https://streamtape.com/e/example7" },
                    { ep: 8, title: "This Is Frustrating", link: "https://streamtape.com/e/example8" },
                    { ep: 9, title: "You've Been Hiding Your Skills", link: "https://streamtape.com/e/example9" },
                    { ep: 10, title: "What Is This, a Raid?", link: "https://streamtape.com/e/example10" },
                    { ep: 11, title: "A Knight Who Defends an Empty Throne", link: "https://streamtape.com/e/example11" },
                    { ep: 12, title: "Arise", link: "https://streamtape.com/e/example12", isNewEp: true }
                ]
            },
            s2: {
                seasonName: "Season 2",
                seasonZip: "https://terabox.com/s/solo_season2_zip",
                episodes: [
                    { ep: 1, title: "You Aren't E-Rank Anymore", link: "https://streamtape.com/e/3DoLYvwqLDS3g8/S2E01_-_1080p_-_Solo_Leveling_-_HindiDubbed4u.In.mkv" },
                    { ep: 2, title: "Shadow Monarch Rises", link: "https://streamtape.com/e/s2e2_example", isNewEp: true }
                ]
            }
        }
    },
    {
        id: 3,
        name: "Overlord",
        title: "Overlord",
        banner: "Overlord.jpg",
        img: "Overlord.jpg",
        sub: "Hindi Dubbed",
        lang: "Hindi Dubbed",
        rating: "8.5",
        year: "2015",
        eps: "13",
        addedDate: "2024-05-10",
        latestUpdate: "S1 • Ep 3 Added",
        isSeasonCompleted: false,
        desc: "A player finds himself unable to log out from a fantasy MMORPG game, taking the form of a powerful skeleton wizard.",
        genres: ["Fantasy"],
        genre: "Fantasy",
        seasons: {
            s1: {
                seasonName: "Season 1",
                seasonZip: "https://hubcloud.cx/drive/gafg7gluzpgpblc",
                episodes: [
                    { ep: 1, title: "End and Beginning", link: "https://streamtape.com/e/2DJ2wbbpKefZl6z/" },
                    { ep: 2, title: "Floor Guardian", link: "https://streamtape.com/e/overlord_ep2" },
                    { ep: 3, title: "The Battle of Carne Village", link: "https://streamtape.com/e/overlord_ep3", isNewEp: true }
                ]
            }
        }
    },
    {
        id: 4,
        name: "The Elusive Samurai",
        title: "The Elusive Samurai",
        banner: "The Elusive Samurai.jpg",
        img: "The Elusive Samurai.jpg",
        sub: "Hindi Dubbed",
        lang: "Hindi Dubbed",
        rating: "8.1",
        year: "2024",
        eps:"12",
        addedDate: "2026-09-16",
        latestUpdate: "S1 • Ep 12 Added",
        isSeasonCompleted: false,
        desc: "A runaway heir and a town of secret warriors build the perfect revenge story.",
        genres: ["Action"],
        genre: "Action",
        seasons: {
            s1: {
                seasonName: "Season 1",
                seasonZip: "https://terabox.com/s/samurai_season1_zip",
                episodes: [
                    { ep: "Ep 1", title: "May 22", watch: "https://morencius.com/embed/0u2nsg1qq574", download: "https://morencius.com/file/0u2nsg1qq574" },
                    { ep: "Ep 2", title: "Divine Child", watch: "https://morencius.com/embed/yv3lx32h0isg", download: "https://morencius.com/file/yv3lx32h0isg" },
                    { ep: "Ep 3", title: "Hide-and-Seek in Kamakura", watch: "https://morencius.com/embed/sd7rczh43fn4", download: "https://morencius.com/file/sd7rczh43fn4" },
                    { ep: "Ep 4", title: "Sadism", watch: "https://morencius.com/embed/hf4b2424z7ep", download: "https://morencius.com/file/hf4b2424z7ep" },
                    { ep: "Ep 5", title: "Dog-Shooting", watch: "https://morencius.com/embed/if85zhj52ckj", download: "https://morencius.com/file/if85zhj52ckj" },
                    { ep: "Ep 6", title: "Steal the Order", watch: "https://morencius.com/embed/0ztwl68j8vw9", download: "https://morencius.com/file/0ztwl68j8vw9" },
                    { ep: "Ep 7", title: "Winter in Shinano", watch: "https://morencius.com/embed/fgoxfg2k1pob", download: "https://morencius.com/file/fgoxfg2k1pob" },
                    { ep: "Ep 8", title: "Hide-and-Seek", watch: "https://morencius.com/embed/hryr33a9ueti", download: "https://morencius.com/file/hryr33a9ueti" },
                    { ep: "Ep 9", title: "My Buddha", watch: "https://morencius.com/embed/ios6iiim7mhs", download: "https://morencius.com/file/ios6iiim7mhs" },
                    { ep: "Ep 10", title: "Monster Child", watch: "https://morencius.com/embed/urvly0eo25xu", download: "https://morencius.com/file/urvly0eo25xu" },
                    { ep: "Ep 11", title: "Deputy Governor", watch: "https://morencius.com/embed/acqr6k4j5qn7", download: "https://morencius.com/file/acqr6k4j5qn7" },
                    { ep: "Ep 12", title: "The Elusive Samurai", watch: "https://morencius.com/embed/5z3q223x7l9b", download: "https://morencius.com/file/5z3q223x7l9b" }
                ]
            }
        }
    }
];