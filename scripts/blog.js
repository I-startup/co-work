document.addEventListener('alpine:init', () => {
    Alpine.data('blogPosts', () => ({
        currentFilter: 'all',
        posts: [
            {
                id: 1,
                title: 'The Future of Coworking Spaces in 2025',
                excerpt: 'Discover how AI and automation are reshaping the coworking industry with innovative solutions and smart workspace management.',
                date: 'April 18, 2025',
                category: 'trends',
                image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
                author: 'Sarah Johnson',
                readTime: '5 min read' ,
                visible: true
            },
            {
                id: 2,
                title: 'Maximizing Workspace Efficiency',
                excerpt: 'Learn practical tips and strategies for optimizing your coworking space layout and resource utilization.',
                date: 'April 15, 2025',
                category: 'tips',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
                author: 'Michael Chen',
                readTime: '4 min read' ,
                visible: true
            },
            {
                id: 3,
                title: 'Building Community in Coworking Spaces',
                excerpt: 'Effective strategies for fostering collaboration and networking in shared workspaces.',
                date: 'April 12, 2025',
                category: 'insights',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
                author: 'Emma Rodriguez',
                readTime: '6 min read' ,
                visible: true,

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