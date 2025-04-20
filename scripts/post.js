
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
                title: 'How Smart Analytics and Automated Marketing Can Transform Your Coworking Space',
                excerpt: 'Learn how coworking managers can turn data into real growth using intelligent analytics, member insights, and personalized email campaigns.',
                content: `
                <div class="space-y-6 max-w-4xl mx-auto">
                    <h1 class="text-3xl font-bold text-yellow-400 mb-6">How Smart Analytics and Automated Marketing Can Transform Your Coworking Space</h1>
                
                    <img src="https://www.servcorp.co.uk/media/35868/collaborative-workspace.jpg?format=webp&quality=70&width=688" alt="Analytics dashboard in a coworking office" class="rounded-xl shadow-md w-full">
                
                    <p class="text-gray-300">Coworking spaces are no longer just about desks and Wi-Fi—they're ecosystems. And managing that ecosystem effectively means knowing what works, what doesn’t, and what your members truly need. That’s where smart analytics and automated marketing come in.</p>
                
                    <h2 class="text-2xl font-bold text-yellow-400 mt-8">Smart Analytics: Turn Data into Revenue</h2>
                    <p class="text-gray-300">Understanding how people use your space isn’t just nice to know—it’s key to growth. Our built-in analytics engine tracks:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Desk and room usage patterns over time</li>
                    <li>Peak and off-peak occupancy</li>
                    <li>Member engagement across amenities</li>
                    </ul>
                    <p class="text-gray-300">With these insights, you can optimize layout, fine-tune pricing, and know exactly when to promote offers—or hold back.</p>
                
                    <img src="https://landing.spaces.nexudus.com/en/Blog/GetImage?id=1414987376&w=600h=314&mode=Pad" alt="Heatmap and member analytics example" class="rounded-xl shadow-md w-full my-4">
                
                    <h2 class="text-2xl font-bold text-yellow-400">Automated Email Marketing</h2>
                    <p class="text-gray-300">Manually managing email lists? That’s so 2020. Our system automatically segments your members by criteria like:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Occupation</li>
                    <li>Length of membership</li>
                    <li>Preferred working hours</li>
                    </ul>
                    <p class="text-gray-300">Based on this, it sends personalized promotions and updates—without you lifting a finger. Think:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Special offers during low-occupancy periods</li>
                    <li>Event invites tailored to professional interests</li>
                    <li>Celebratory discounts for work anniversaries or birthdays</li>
                    </ul>
                
                    <img src="https://cdn.prod.website-files.com/66eb111e36b3aae39f5c0cb2/6777bc2d3405bc8c8b845b32_674af58b8577b80adf77ea3a_Sl%2520No%252011.png" alt="Coworking email marketing on laptop" class="rounded-xl shadow-md w-full my-4">
                
                    <blockquote class="border-l-4 border-yellow-400 pl-4 my-6">
                    <p class="text-gray-300 italic">“We used to send one-size-fits-all emails. Now our members get emails that actually matter to them—and our response rates doubled.” — coworking manager, Sfax</p>
                    </blockquote>
                
                    <h2 class="text-2xl font-bold text-yellow-400">Why This Matters</h2>
                    <p class="text-gray-300">By connecting smart analytics with personalized outreach, coworking managers can:</p>
                    <ol class="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Boost engagement during slow hours</li>
                    <li>Retain members with offers that feel personal</li>
                    <li>Identify underused areas or services for rework</li>
                    </ol>
                
                    <p class="text-gray-300">This isn’t just about tech—it’s about understanding your community and meeting their needs before they even ask.</p>
                
                    <h2 class="text-2xl font-bold text-yellow-400">Want to See It in Action?</h2>
                    <p class="text-gray-300">Check out tools like <a href="https://nexudus.com/" target="_blank" class="text-yellow-400 underline">Nexudus</a>, <a href="https://www.officernd.com/" target="_blank" class="text-yellow-400 underline">OfficeRnD</a>, or <a href="https://mailchimp.com/" target="_blank" class="text-yellow-400 underline">Mailchimp</a> integrations to start turning your data into growth.</p>
                </div>
                `,
                date: 'April 20, 2025',
                category: 'growth',
                image: 'https://a-us.storyblok.com/f/1018383/4321x1801/d6210ce438/herobgimg-3x.jpg/m/1600x0',
                author: 'Sarah Johnson',
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
