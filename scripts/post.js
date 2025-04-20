
document.addEventListener('alpine:init', () => {
    Alpine.data('postData', () => ({
        loading: true,
        post: null,
        init() {
            const urlParams = new URLSearchParams(window.location.search);
            const postId = parseInt(urlParams.get('id'));
            
            // Sample post data - in a real app, you'd fetch this from an API or database
            const posts = [
            {
        id: 1,
        title: 'The Future of Coworking Spaces in 2025',
        excerpt: 'Discover how AI and automation are reshaping the coworking industry with innovative solutions and smart workspace management.',
        content: `
            <div class="space-y-6 max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-yellow-400 mb-6">The Future of Coworking Spaces in 2025</h1>
                
                <p class="text-gray-300">The landscape of coworking spaces is rapidly evolving with technological advancements. Here's what we're seeing in 2025:</p>
                
                <h2 class="text-2xl font-bold text-yellow-400">AI-Powered Space Management</h2>
                <p class="text-gray-300">Smart algorithms now optimize workspace layouts in real-time, adjusting to daily usage patterns and occupancy rates. This ensures maximum efficiency while maintaining comfort.</p>
                
                <h2 class="text-2xl font-bold text-yellow-400">Automated Systems</h2>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Smart booking platforms with predictive pricing</li>
                    <li>IoT-enabled desk and room management</li>
                    <li>Automated climate control systems</li>
                    <li>AI-driven security and access control</li>
                </ul>
                
                <blockquote class="border-l-4 border-yellow-400 pl-4 my-6">
                    <p class="text-gray-300 italic">"The integration of AI in coworking spaces has increased efficiency by 40% while reducing operational costs by 25%."</p>
                </blockquote>

                <h2 class="text-2xl font-bold text-yellow-400">Future Predictions</h2>
                <p class="text-gray-300">By the end of 2025, we expect to see:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Virtual reality meeting rooms</li>
                    <li>Biometric access control</li>
                    <li>Autonomous cleaning systems</li>
                    <li>Dynamic pricing based on real-time demand</li>
                </ul>
            </div>`,
        date: 'April 18, 2025',
        category: 'trends',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
        author: 'Sarah Johnson',
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'Maximizing Workspace Efficiency',
        excerpt: 'Learn practical tips and strategies for optimizing your coworking space layout and resource utilization.',
        content: `
            <div class="space-y-6  max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-yellow-400 mb-6">Maximizing Workspace Efficiency</h1>
                
                <p class="text-gray-300">Optimizing workspace efficiency is crucial for modern coworking spaces. Here are key strategies:</p>
                
                <h2 class="text-2xl font-bold text-yellow-400">Space Planning Fundamentals</h2>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Strategic furniture placement</li>
                    <li>Flexible workstation design</li>
                    <li>Traffic flow optimization</li>
                    <li>Multi-purpose areas</li>
                </ul>
                
                <div class="bg-gray-700 p-4 rounded-lg my-6">
                    <h3 class="text-yellow-400 font-bold mb-2">Pro Tip:</h3>
                    <p class="text-gray-300">Use heat mapping tools to identify underutilized areas and optimize space allocation.</p>
                </div>

                <h2 class="text-2xl font-bold text-yellow-400">Resource Management</h2>
                <p class="text-gray-300">Key aspects of resource management include:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Smart booking systems</li>
                    <li>Utilization tracking</li>
                    <li>Automated maintenance schedules</li>
                    <li>Energy consumption monitoring</li>
                </ul>
            </div>`,
        date: 'April 15, 2025',
        category: 'tips',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        author: 'Michael Chen',
        readTime: '4 min read'
    },
    {
        id: 3,
        title: 'Building Community in Coworking Spaces',
        excerpt: 'Effective strategies for fostering collaboration and networking in shared workspaces.',
        content: `
            <div class="space-y-6  max-w-4xl mx-auto">
                <h1 class="text-3xl font-bold text-yellow-400 mb-6">Building Community in Coworking Spaces</h1>
                
                <p class="text-gray-300">Creating a strong community is essential for coworking success. Here's how to build and maintain one:</p>
                
                <h2 class="text-2xl font-bold text-yellow-400">Community Building Strategies</h2>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Regular networking events</li>
                    <li>Skill-sharing workshops</li>
                    <li>Member spotlight programs</li>
                    <li>Collaborative projects</li>
                </ul>

                <blockquote class="border-l-4 border-yellow-400 pl-4 my-6">
                    <p class="text-gray-300 italic">"Strong communities increase member retention by up to 85% and lead to valuable business collaborations."</p>
                </blockquote>

                <h2 class="text-2xl font-bold text-yellow-400">Digital Community Tools</h2>
                <p class="text-gray-300">Leverage technology to strengthen community bonds:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Member networking platforms</li>
                    <li>Community message boards</li>
                    <li>Event management systems</li>
                    <li>Skills directory</li>
                </ul>
            </div>`,
        date: 'April 12, 2025',
        category: 'insights',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        author: 'Emma Rodriguez',
        readTime: '6 min read'
    }
            ];
            
            this.post = posts.find(post => post.id === postId);
            this.loading = false;
        }
    }));
});
