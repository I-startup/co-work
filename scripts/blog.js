document.addEventListener('alpine:init', () => {
    Alpine.data('blogPosts', () => ({
        currentFilter: 'all',
        posts: [
            {
                id: 1,
                title: 'The Future of Coworking Spaces in 2025',
                excerpt: 'Coworking spaces are getting smarter—not through flashy tech, but with tools that simplify workspace management, automate bookings, and improve user experience.',
                date: 'April 18, 2025',
                category: 'trends',
                image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80',
                author: 'Sarah Johnson',
                readTime: '5 min read',
                visible: true
            },
            {
                id: 2,
                title: 'How Smart Analytics and Automated Marketing Can Transform Your Coworking Space',
                excerpt: 'Learn how coworking managers can turn data into real growth using intelligent analytics, member insights, and personalized email campaigns.',
                date: 'April 20, 2025',
                category: 'tips',
                image: 'https://a-us.storyblok.com/f/1018383/4321x1801/d6210ce438/herobgimg-3x.jpg/m/1600x0',
                author: 'Sarah Johnson',
                readTime: '4 min read',
                visible: true
            },
            {
                id: 3,
                title: 'Why Every Coworking Space Needs a Smart Booking Page',
                excerpt: 'Your coworking space isn’t truly modern without an efficient, real-time booking system. Here’s why it matters—and how Co-Work makes it effortless.',
                date: 'April 20, 2025',
                category: 'trends',
                image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
                author: 'Sarah Johnson',
                readTime: '4 min read',
                visible: true,
            },
            {
                id: 4,
                title: 'Building Community in Coworking Spaces',
                excerpt: 'Effective strategies for fostering collaboration and networking in shared workspaces.',
                date: 'April 12, 2025',
                category: 'insights',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                author: 'Emma Rodriguez',
                readTime: '6 min read',
                visible: true
            }
        ],
        get filteredPosts() {
            if (this.currentFilter === 'all') {
                return this.posts;
            }
            return this.posts.filter(post => post.category === this.currentFilter);
        },
        filterPosts(category) {
            this.currentFilter = category;
        },
        getPostUrl(id) {
            return `post.html?id=${id}`;
        }
    }));
});