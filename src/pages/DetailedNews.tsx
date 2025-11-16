import { Heart, MessageSquare, Bookmark, Share2 } from 'lucide-react';
import Header from "../components/Header";

const DetailedNews: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="text-sm text-gray-600 mb-4">
                    <a href="#" className="hover:text-blue-600">News</a>
                    <span className="mx-2">/</span>
                    <a href="#" className="hover:text-blue-600">Technology</a>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Tech Giants Unveil New Innovations at Annual Conference
                </h1>

                <p className="text-sm text-gray-600 mb-8">
                    By <span className="font-medium text-gray-900">Amelia Harper</span> • Published on July 26, 2024
                </p>

                <div className="bg-linear-to-b from-gray-700 to-gray-900 rounded-lg h-96 mb-8 flex items-center justify-center">
                    <div className="bg-gray-800 bg-opacity-50 border-2 border-dashed border-gray-600 rounded-xl w-full h-full max-w-4xl"></div>
                </div>

                <article className="prose prose-lg max-w-none mb-12 text-gray-700">
                    <p>
                        The annual Tech Innovators Conference wrapped up yesterday, showcasing groundbreaking advancements from leading technology companies. This year’s event highlighted innovations in artificial intelligence, sustainable technology, and virtual reality, setting the stage for future industry trends. Keynote speakers from several major firms presented their latest products and strategies, emphasizing a commitment to user-centric design and ethical considerations in technology development.
                    </p>
                    <p>
                        The conference also featured interactive exhibits and workshops, allowing attendees to experience the new technologies firsthand and engage with industry experts. The overall sentiment was optimistic, with a strong focus on collaboration and the potential for technology to address global challenges.
                    </p>
                </article>

                <div className="flex items-center space-x-6 py-4 border-t border-b border-gray-200 mb-12 justify-center">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition">
                        <Heart className="h-5 w-5" />
                        <span className="font-medium">1.2k</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                        <MessageSquare className="h-5 w-5" />
                        <span className="font-medium">34</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition">
                        <Bookmark className="h-5 w-5" />
                        <span className="text-sm font-medium">Save</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm font-medium">Share</span>
                    </button>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Article 1 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                            <div className="flex">
                                <div className="bg-teal-500 p-8 flex items-center justify-center">
                                    <div className="bg-teal-600 p-6 rounded-lg">
                                        <div className="bg-teal-700 w-12 h-12 rounded-full flex items-center justify-center">
                                            <div className="bg-teal-800 w-6 h-6 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1">
                                    <span className="text-xs font-semibold text-blue-600 uppercase">Technology</span>
                                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                                        The Future of AI: Trends and Predictions
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Experts discuss the potential impact of AI on various industries.
                                    </p>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                            <div className="flex">
                                <div className="bg-linear-to-b from-green-700 to-green-900 p-8 flex items-center justify-center">
                                    <div className="bg-green-800 bg-opacity-80 p-6 rounded-lg">
                                        <div className="bg-green-900 w-16 h-12 rounded flex items-center justify-center text-green-300 text-xs font-mono">
                                            18°C
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1">
                                    <span className="text-xs font-semibold text-blue-600 uppercase">Technology</span>
                                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                                        Sustainable Tech: Innovations for a Greener Future
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Companies are developing eco-friendly solutions to reduce environmental impact.
                                    </p>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments (2)</h2>

                    {/* Comment 1 */}
                    <div className="flex space-x-4 mb-6 pb-6 border-b border-gray-200">
                        <div className="w-10 h-10 bg-orange-500 rounded-full shrink-0"></div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold text-gray-900">Ethan Carter</span>
                                <span className="text-sm text-gray-500">July 27, 2024</span>
                            </div>
                            <p className="text-gray-700">
                                Great coverage of the conference! It’s exciting to see the progress in AI and sustainable tech.
                            </p>
                        </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="flex space-x-4 mb-8">
                        <div className="w-10 h-10 bg-pink-500 rounded-full shrink-0"></div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold text-gray-900">Olivia Bennett</span>
                                <span className="text-sm text-gray-500">July 27, 2024</span>
                            </div>
                            <p className="text-gray-700">
                                I agree! The focus on ethical considerations is also very important.
                            </p>
                        </div>
                    </div>

                    {/* Add Comment */}
                    <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-full shrink-0"></div>
                        <div className="flex-1">
                            <textarea
                                placeholder="Add a comment..."
                                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                                rows={3}
                            ></textarea>
                            <div className="mt-3 flex justify-end">
                                <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default DetailedNews;