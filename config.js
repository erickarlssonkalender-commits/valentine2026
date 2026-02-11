// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Delisha", "Anjitesh", "Mike"
    valentineName: "Carlos",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Vill du bli min på alla hjärtans dag? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Är du möjligtvis lite förtjust i mig? 😏",                                    // First interaction
            yesBtn: "Ja",                               
            // Text for "Yes" button
            noBtn: "Nej",                                               // Text for "No" button
            secretAnswer: "Jag inte bara gillar dig, jag älskar dig! ❤️"           // Secret hover message
        },

        second: {
            text: "Hur mycket älskar du mig?",                          // For the love meter
            startText: "Så här mycket!",                                   // Text before the percentage
            nextBtn: "Nästa ❤️"                                         // Text for the next button
        },
        third: {
            text: "Vill du vara min Valentine, eller ska jag behöva muta dig med Inca Kola? 💝", // The big question!
            yesBtn: "Ja!",                                             // Text for "Yes" button
            noBtn: "Nej"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Woooooow Älskar du mig så mycket?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To the moon and back! 🚀💝",              // Shows when they go past 1000%
        normal: "Nu närmar vi oss, nu är vi i Mellbystrand, fortsätt! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! Jag är den lyckligaste personen i världen!",
        message: "Kom ska jag ge dig en gåva och en kram!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Export for use in other scripts
window.DEFAULT_CONFIG = CONFIG;
window.VALENTINE_CONFIG = { ...CONFIG };
