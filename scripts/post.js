
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
                excerpt: 'Coworking spaces are getting smarter—not through flashy tech, but with tools that simplify workspace management, automate bookings, and improve user experience.',
                content: `
                <div class="space-y-6 max-w-4xl mx-auto">
                    <h1 class="text-3xl font-bold text-yellow-400 mb-6">The Future of Coworking Spaces in 2025</h1>
                    <p class="text-gray-300">Coworking spaces are evolving rapidly, and the future looks bright. In 2025, we’re seeing a shift from high-tech gimmicks to practical solutions that enhance the coworking experience.</p>
                    <p class="text-gray-300">Coworking in 2025 is about practicality. It’s less about high-tech showpieces and more about smart tools that help space managers run efficient, responsive, and user-friendly environments. From automated bookings to adaptive lighting, coworking spaces are becoming easier to manage—and better to work in.</p>

                    <h2 class="text-2xl font-bold text-yellow-400 mt-8">Smarter Space Management</h2>
                    <p class="text-gray-300">Managers now have access to real-time data on how spaces are used. Whether it’s desk utilization or meeting room turnover, tools like <a href="https://www.officernd.com/" target="_blank" class="text-yellow-400 underline">OfficeRnD</a> and <a href="https://nexudus.com" target="_blank" class="text-yellow-400 underline">Nexudus</a> offer detailed insights that help optimize layouts, prevent bottlenecks, and improve flow.</p>

                    <img src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80" alt="Workspace management dashboard" class="rounded-xl shadow-md w-full my-4">

                    <h2 class="text-2xl font-bold text-yellow-400">Dynamic Booking Systems</h2>
                    <p class="text-gray-300">Gone are the days of manual scheduling. Modern coworking spaces use smart booking platforms that:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Automatically release unused bookings</li>
                    <li>Suggest best times to avoid peak hours</li>
                    <li>Adapt pricing based on demand (similar to airlines or ride-share apps)</li>
                    <li>Let members check in via mobile or facial recognition</li>
                    </ul>

                    <p class="text-gray-300">Tools like <a href="https://andcards.com/" target="_blank" class="text-yellow-400 underline">Andcards</a> or <a href="https://coworkify.com/" target="_blank" class="text-yellow-400 underline">Coworkify</a> are becoming essential for streamlining this process.</p>

                    <blockquote class="border-l-4 border-yellow-400 pl-4 my-6">
                    <p class="text-gray-300 italic">"Our new booking system reduced no-shows by 60% and saved hours of admin time each week." — coworking space owner, Tunis</p>
                    </blockquote>

                    <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=80" alt="Smart booking system UI" class="rounded-xl shadow-md w-full my-4">

                    <h2 class="text-2xl font-bold text-yellow-400">Living Automation That Learns</h2>
                    <p class="text-gray-300">One of the quiet revolutions in coworking is automation that adapts to usage patterns. For example:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Lighting and temperature that adjust based on occupancy and member preferences</li>
                    <li>Automated cleaning schedules triggered by room usage data</li>
                    <li>Dashboards that suggest layout improvements based on daily movement patterns</li>
                    </ul>

                    <p class="text-gray-300">These systems aren't replacing humans—they’re freeing them up to focus on creating better community and culture.</p>

                    <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80" alt="Smart lighting and sensors in office" class="rounded-xl shadow-md w-full my-4">

                    <h2 class="text-2xl font-bold text-yellow-400">What This Means for Managers</h2>
                    <p class="text-gray-300">The most forward-thinking coworking managers in 2025 are doing three things:</p>
                    <ol class="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Using analytics to drive layout and pricing decisions</li>
                    <li>Automating the basics to reduce admin workload</li>
                    <li>Investing in member experience—not just hardware</li>
                    </ol>

                    <p class="text-gray-300">At the end of the day, technology should help spaces run smoother and make people feel more comfortable—not get in the way. That’s the kind of future coworking is heading toward, and it’s already happening.</p>
                </div>
                `,
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
