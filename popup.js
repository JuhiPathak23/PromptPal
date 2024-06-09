document.addEventListener('DOMContentLoaded', function() {
    var prompts = document.querySelectorAll('.prompt');
    prompts.forEach(function(prompt) {
      prompt.addEventListener('click', function() {
        var text;
        if (prompt.id === 'prompt1') {
            text="Empower car owners with essential maintenance tips and routines to keep their vehicles running smoothly and safely. Cover topics such as regular oil changes, tire rotations, brake inspections, fluid checks, and battery maintenance to prolong the lifespan of cars and prevent breakdowns.";
        }
        else if (prompt.id === 'prompt2') {
            text="Generate a series of blog post ideas centered around sustainable living practices, offering actionable tips and creative solutions for reducing environmental impact and promoting eco-friendly habits. Brainstorm topics such as zero-waste lifestyle tips, upcycling DIY projects, eco-conscious travel guides, sustainable fashion trends, and ethical consumerism recommendations. Dive deep into each topic, providing practical advice, inspirational stories, and resources to empower readers to make positive changes in their daily lives and contribute to a more sustainable future.";
        }
        else if (prompt.id === 'prompt3') {
            text="Curate a diverse selection of book recommendations spanning various genres, authors, and literary styles to inspire readers' reading journeys and broaden their literary horizons. Showcase must-read classics, contemporary bestsellers, indie gems, and niche genres to cater to diverse tastes and interests. Provide insightful book reviews, plot summaries, and reader testimonials to guide readers in discovering their next literary adventure.";
        }
        else if (prompt.id === 'prompt4') {
            text="Spark creativity and inspire writers with a collection of imaginative writing prompts and story starters across various genres and themes. Encourage exploration of character development, plot twists, settings, and narrative techniques to ignite the creative process and overcome writer's block.";
        }
        else if (prompt.id === 'prompt5') {
            text="Provide actionable insights and proven strategies for leveraging digital marketing channels to grow businesses, engage audiences, and drive conversions. Explore the latest trends in social media marketing, content creation, email campaigns, SEO techniques, and influencer partnerships. Offer practical advice, case studies, and tools to help marketers optimize their digital marketing efforts and achieve measurable results.";
        }
        else if (prompt.id === 'prompt6') {
            text="Encourage creativity and self-expression with a collection of DIY craft projects that inspire imagination and resourcefulness. Provide step-by-step tutorials for creating handmade gifts, home decor items, fashion accessories, and seasonal decorations using affordable materials and simple techniques. Foster a sense of pride and accomplishment in crafting beautiful, one-of-a-kind creations while reducing waste and promoting sustainability.";
        }
        else if (prompt.id === 'prompt7') {
            text="Transform homes into eco-friendly havens with sustainable home improvement ideas and green living practices. Explore energy-efficient appliances, eco-friendly building materials, water-saving fixtures, and renewable energy solutions to reduce environmental impact and lower utility bills.";
        }
        else if (prompt.id === 'prompt8') {
            text="Empower lifelong learners with a curated selection of educational resources, including online courses, tutorials, e-books, and learning platforms covering a wide range of subjects and skill levels. Highlight opportunities for personal and professional development in areas such as STEM fields, arts and humanities, language learning, career advancement, and lifelong hobbies. Facilitate access to high-quality educational content and foster a culture of continuous learning and growth.";
        }
        else if (prompt.id === 'prompt9') {
            text="Craft a series of articles exploring the entrepreneurial journey, from ideation and business planning to launch, growth, and scaling. Share inspirational success stories, lessons learned from failure, and practical strategies for building a thriving business. Dive into topics such as market research, product development, marketing strategies, financial management, and leadership skills to empower aspiring entrepreneurs to turn their dreams into reality.";
        }
        else if (prompt.id === 'prompt10') {
            text="Curate a fashion forecast highlighting upcoming trends, styles, and must-have wardrobe essentials for the upcoming season. Showcase runway-inspired looks, street style inspirations, and celebrity fashion icons to inspire readers to refresh their wardrobes and express their personal style with confidence. Offer styling tips, outfit ideas, and budget-friendly alternatives to help readers stay on-trend and fashion-forward.";
        }
        else if (prompt.id === 'prompt11') {
            text="Offer insightful critiques and analysis of recent film releases, classic favorites, and hidden gems spanning various genres and cultures. Evaluate cinematic elements such as storytelling, cinematography, acting performances, soundtrack, and thematic depth to provide readers with comprehensive reviews and recommendations. Explore thought-provoking themes, cultural significance, and artistic merits of films to enrich readers' viewing experiences and foster appreciation for the art of filmmaking.";
        }
        else if (prompt.id === 'prompt12') {
            text="Provide actionable tips for creating a budget and managing personal finances effectively. Cover topics such as tracking expenses, setting financial goals, saving and investing wisely, and planning for retirement to help readers take control of their financial future and achieve financial freedom.";
        }
        else if (prompt.id === 'prompt13') {
            text="Share inspiring stories of individuals who have overcome obstacles and achieved remarkable fitness goals through dedication, perseverance, and a positive mindset. Include practical tips for staying motivated, setting realistic goals, and maintaining consistency on the journey to better health and fitness.";
        }
        else if (prompt.id === 'prompt14') {
            text="Cultivate a thriving garden oasis with expert gardening advice, practical tips, and seasonal care guides for cultivating flowers, vegetables, herbs, and ornamental plants. Share insights on soil preparation, planting techniques, watering schedules, pest control, and organic gardening practices to nurture healthy, vibrant gardens year-round. Inspire green thumbs of all levels to connect with nature, beautify outdoor spaces, and reap the rewards of homegrown harvests.";
        }
        else if (prompt.id === 'prompt15') {
            text="Design a comprehensive wellness program tailored to busy individuals seeking to prioritize self-care and improve overall health and well-being. Structure the program into manageable daily routines encompassing physical fitness, mental health, nutrition, and stress management strategies. Provide detailed workout plans featuring a variety of exercises to target strength, flexibility, and cardiovascular fitness. Incorporate mindfulness techniques, meditation practices, and breathing exercises to promote stress relief and emotional balance. Offer practical nutrition guidelines, meal plans, and healthy recipes to support energy levels, digestion, and immune function. Include tips for creating a supportive environment, setting realistic goals, and staying motivated on the journey to holistic wellness.";
        }
        else if (prompt.id === 'prompt16') {
            text="Simplify meal planning and make healthy eating convenient with a collection of nutritious meal prep ideas and recipes. Offer time-saving tips, batch cooking strategies, and versatile meal components to streamline preparation and ensure balanced, satisfying meals throughout the week.";
        }
        else if (prompt.id === 'prompt17') {
            text="Offer creative inspiration for transforming living spaces into stylish and functional havens that reflect personal tastes and lifestyles. Explore interior design trends, color palettes, furniture arrangements, and decor accents to enhance the beauty and comfort of every room in the home. Provide DIY projects, budget-friendly hacks, and expert tips for refreshing home decor and maximizing space utilization.";
        }
        else if (prompt.id === 'prompt18') {
            text="Stay active and fit with a variety of indoor exercise workouts designed to accommodate different fitness levels and preferences. Curate a selection of cardio routines, strength training exercises, yoga flows, and HIIT workouts that can be done at home with minimal equipment.";
        }
        else if (prompt.id === 'prompt19') {
            text="Foster self-discovery and personal growth with thought-provoking journaling prompts that encourage introspection and self-reflection. Explore topics such as gratitude, goal-setting, values, fears, and dreams to deepen self-awareness and cultivate a sense of clarity and purpose.";
        }
        else if (prompt.id === 'prompt20') {
            text="Optimize kitchen spaces and streamline meal preparation with practical organization tips and storage solutions. Share ideas for decluttering countertops, arranging cabinets, organizing pantry essentials, and maximizing efficiency in food preparation areas.";
        }
        else if (prompt.id === 'prompt21') {
            text="Facilitate language acquisition and fluency with a curated selection of language learning resources, including online courses, apps, podcasts, books, and language exchange communities. Provide guidance on effective study methods, vocabulary acquisition, grammar practice, and cultural immersion experiences.";
        }
        else if (prompt.id === 'prompt22') {
            text="Highlight the charm and character of local communities with immersive travel guides showcasing hidden gems, cultural landmarks, and culinary delights in cities, towns, and regions around the world. Provide insider tips, off-the-beaten-path attractions, and recommendations from locals to help readers discover the authentic spirit of each destination. Celebrate the diversity of local cultures, traditions, and experiences that make travel memorable and meaningful.";
        }
        else if (prompt.id === 'prompt23') {
            text="Raise awareness and promote mental health literacy with informative articles, personal stories, and practical resources for understanding and managing mental health challenges. Explore topics such as stress management, anxiety coping strategies, depression recovery, mindfulness practices, and self-care rituals to promote emotional well-being and resilience. Destigmatize mental illness, encourage open dialogue, and advocate for accessible mental health support services.";
        }
        else if (prompt.id === 'prompt24') {
            text="Cultivate inner peace, clarity, and emotional resilience with mindfulness meditation techniques that promote present-moment awareness and stress reduction. Guide practitioners through breath-focused meditation, body scans, loving-kindness practices, and mindful movement exercises to foster a sense of calm and well-being.";
        }
        else if (prompt.id === 'prompt25') {
            text="Nurture skin and hair with homemade beauty recipes using natural ingredients from the kitchen pantry. Share DIY tutorials for facial masks, hair treatments, body scrubs, and bath soaks made with nourishing botanicals, essential oils, and nutrient-rich ingredients for a spa-like pampering experience.";
        }
        else if (prompt.id === 'prompt26') {
            text="Capture the beauty of the natural world through the lens of a camera, showcasing stunning landscapes, wildlife encounters, and awe-inspiring moments in nature. Share photography tips, techniques, and gear recommendations for aspiring nature photographers to capture breathtaking images of mountains, forests, oceans, and wildlife habitats. Celebrate the splendor of nature and inspire conservation efforts through the art of photography.";
        }
        else if (prompt.id === 'prompt27') {
            text="Embark on epic outdoor adventures with an inspirational bucket list of thrilling activities and destinations for nature lovers and adventure seekers. Highlight experiences such as hiking majestic trails, camping under starlit skies, kayaking pristine waters, and exploring breathtaking natural wonders.";
        }
        else if (prompt.id === 'prompt28') {
            text="Develop a comprehensive resource for new parents, offering expert advice, practical tips, and emotional support to navigate the joys and challenges of parenthood. Cover essential topics such as prenatal care, childbirth preparation, newborn care, breastfeeding, sleep training, and early childhood development. Address common parenting concerns, foster positive parent-child relationships, and promote holistic well-being for both parents and children.";
        }
        else if (prompt.id === 'prompt29') {
            text="Craft a profound exploration of personal growth and transformation, drawing upon your own experiences, insights, and wisdom gained from navigating life's challenges and opportunities. Reflect on pivotal moments, epiphanies, and breakthroughs that have shaped your journey of self-discovery, resilience, and fulfillment. Share transformative lessons learned from adversity, setbacks, and failures, highlighting the power of resilience, courage, and self-belief in overcoming obstacles and embracing change. Offer practical strategies, tools, and practices for fostering personal growth, self-awareness, and authenticity, empowering readers to cultivate a deeper sense of purpose, meaning, and fulfillment in their own lives.";
        }
        else if (prompt.id === 'prompt30') {
            text="Empower individuals to take control of their financial future with practical tips, strategies, and resources for budgeting, saving, investing, and achieving financial goals. Cover essential topics such as creating a budget, reducing debt, building an emergency fund, investing in stocks, bonds, and real estate, retirement planning, and wealth accumulation. Provide actionable advice, money-saving hacks, and investment insights to help readers make informed decisions and secure their financial well-being for the long term.";
        }
        else if (prompt.id === 'prompt31') {
            text="Provide expert guidance and practical advice for pet owners on caring for their furry, feathered, or scaled companions. Cover essential topics such as nutrition, grooming, exercise, training, and veterinary care to ensure the health and well-being of pets. Address common concerns, behavior issues, and preventive measures to promote responsible pet ownership and strengthen the bond between humans and animals.";
        }
        else if (prompt.id === 'prompt32') {
            text="Compose a comprehensive review of the latest flagship smartphone model, focusing on its design, performance, camera capabilities, battery life, and unique features. Provide a detailed breakdown of the device's physical appearance, highlighting its build materials, dimensions, and ergonomics. Discuss the user experience, including the responsiveness of the interface, multitasking capabilities, and gaming performance. Evaluate the camera system's image quality in various lighting conditions, highlighting its strengths in capturing detail, color accuracy, and dynamic range. Analyze the battery life under different usage scenarios, such as multimedia consumption, productivity tasks, and gaming sessions. Lastly, delve into any standout features or innovations introduced by the device, such as biometric security enhancements, augmented reality functionalities, or advanced AI integration. Incorporate your personal impressions and anecdotes to enrich the review and provide valuable insights for potential buyers.";
        }
        else if (prompt.id === 'prompt33') {
            text="Optimize remote work efficiency and effectiveness with productivity hacks and time management strategies tailored to remote workers. Share tips for creating a dedicated workspace, setting boundaries, managing distractions, prioritizing tasks, and maintaining work-life balance in a remote work environment.";
        }
        else if (prompt.id === 'prompt34') {
            text="Simplify weeknight meal preparation with a repertoire of quick and easy dinner recipes that can be whipped up in no time. Provide fuss-free recipes for one-pot meals, sheet pan dinners, stir-fries, and 30-minute dishes that deliver on flavor and convenience.";
        }
        else if (prompt.id === 'prompt35') {
            text="Navigate the complexities of relationships with insightful advice, communication strategies, and conflict resolution techniques for fostering healthy, fulfilling connections with romantic partners, family members, friends, and colleagues. Explore topics such as effective communication, active listening, empathy, boundaries, and emotional intimacy to nurture strong, supportive relationships and navigate challenges with grace and understanding.";
        }
        else if (prompt.id === 'prompt36') {
            text="Strengthen family bonds and create lasting memories with a variety of relationship-building activities and bonding experiences for families. Offer ideas for family game nights, outdoor adventures, cooking together, movie marathons, and meaningful conversations to nurture connection and communication.";
        }
        else if (prompt.id === 'prompt37') {
            text="Delve into the fascinating world of science and technology, exploring breakthrough discoveries, cutting-edge research, and revolutionary innovations that are shaping the future. Cover topics such as space exploration, renewable energy, artificial intelligence, genetic engineering, and quantum computing. Translate complex scientific concepts into engaging narratives, fostering curiosity, wonder, and appreciation for the wonders of science.";
        }
        else if (prompt.id === 'prompt38') {
            text="Promote holistic well-being and self-care rituals with a curated collection of practices, habits, and rituals to nurture mind, body, and spirit. Explore mindfulness techniques, relaxation exercises, creative outlets, and self-reflection exercises to cultivate inner peace, resilience, and balance in everyday life. Encourage readers to prioritize self-care as an essential component of overall health and happiness.";
        }
        else if (prompt.id === 'prompt39') {
            text="Craft a captivating opening scene for a story set in a post-apocalyptic world where survivors must navigate a dangerous landscape overrun by mutated creatures. Set the stage by describing the desolate environment, abandoned cities, and remnants of a once-thriving civilization. Introduce the protagonist as they embark on a perilous journey in search of a rumored sanctuary where humanity may find refuge. Plant seeds of intrigue and suspense as the protagonist encounters unexpected challenges, allies, and adversaries along the way. Use vivid imagery and sensory details to immerse readers in the dystopian setting and ignite their curiosity to unravel the mysteries of this harsh new world.";
        }
        else if (prompt.id === 'prompt40') {
            text="Combat stress and promote relaxation with a toolbox of stress relief techniques and coping strategies for managing everyday pressures and challenges. Explore mindfulness practices, deep breathing exercises, progressive muscle relaxation, guided imagery, and stress-reducing activities to restore calm and balance.";
        }
        else if (prompt.id === 'prompt41') {
            text="Champion environmental stewardship and sustainable living practices with actionable tips, eco-friendly product recommendations, and green lifestyle ideas for reducing ecological footprints and promoting planet-friendly habits. Cover topics such as waste reduction, energy conservation, water conservation, ethical consumption, and eco-conscious travel to inspire individuals and communities to embrace sustainable living and protect the planet for future generations.";
        }
        else if (prompt.id === 'prompt42') {
            text="Explore emerging trends and advancements in wearable technology, forecasting their potential impact on various aspects of daily life and industry sectors. Investigate the latest developments in smartwatches, fitness trackers, augmented reality glasses, and health-monitoring devices, highlighting their innovative features and functionalities. Discuss the integration of wearable tech into healthcare, fitness, sports performance, workplace productivity, and entertainment experiences. Analyze the implications of data privacy, security concerns, and ethical considerations associated with wearable devices. Provide insights into future trends and opportunities for innovation in the rapidly evolving landscape of wearable technology.";
        }
        else if (prompt.id === 'prompt43') {
            text="Empower students to effectively manage their time, priorities, and responsibilities with proven time management strategies and techniques. Provide tips for creating study schedules, setting goals, minimizing distractions, staying organized, and balancing academics with extracurricular activities and personal commitments.";
        }
        else if (prompt.id === 'prompt44') {
            text="Create a series of travel guides featuring hidden gems and off-the-beaten-path destinations around the world. Explore unique cultural experiences, natural wonders, and historical landmarks that offer unforgettable adventures for intrepid travelers. Provide insider tips, local insights, and practical recommendations to help readers plan their next unforgettable journey.";
        }
        else if (prompt.id === 'prompt45') {
            text="Embrace sustainability and creativity with upcycling DIY projects that transform discarded materials into functional and stylish creations. Share tutorials for repurposing furniture, clothing, household items, and accessories using innovative design ideas and eco-friendly techniques.";
        }
        else if (prompt.id === 'prompt46') {
            text="Foster team cohesion, collaboration, and morale among remote teams with engaging virtual team building activities and icebreakers. Offer ideas for online games, virtual happy hours, collaborative projects, and team challenges that build camaraderie and strengthen relationships in virtual work environments.";
        }
        else if (prompt.id === 'prompt47') {
            text="Embark on a journey of self-discovery and rejuvenation with a curated selection of wellness retreat destinations offering holistic experiences for mind, body, and spirit. Highlight retreats focused on yoga, meditation, mindfulness, spa treatments, healthy cuisine, and immersive nature experiences to promote relaxation and well-being.";
        }
        else if (prompt.id === 'prompt49') {
            text="Unwind and release tension with a sequence of gentle yoga poses and stretches designed to promote relaxation and stress relief. Guide practitioners through calming asanas, deep stretches, and mindful breathing techniques to soothe the nervous system, quiet the mind, and restore balance.";
        }
        else if (prompt.id === 'prompt50') {
            text="Create a tranquil oasis of serenity with Zen garden design ideas inspired by Japanese aesthetics and principles of mindfulness. Explore minimalist layouts, gravel raking patterns, stone arrangements, and lush greenery to evoke a sense of harmony, balance, and inner peace. Provide tips for creating Zen garden elements such as meditation benches, water features, and symbolic rock formations to enhance the sensory experience and promote contemplation.";
        }
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var tabId = tabs[0].id;
          var currentUrl = tabs[0].url;
          var newUrl = currentUrl + "?q=" + encodeURIComponent(text);
          chrome.tabs.update(tabId, { url: newUrl });
  
          // Clear the search bar
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: function() {
              document.querySelector('input[name="q"]').value = '';
            }
          });
        });
      });
    });
  });
  