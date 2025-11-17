import { Heart, MessageSquare, Bookmark, Share2 } from 'lucide-react';
import Header from "../components/Header";
import { useParams } from "react-router-dom"
import { useNewsContext } from '../context/AppContext';
import { formatDate, trimContent } from "../utils";

const DetailedNews: React.FC = () => {
    const { id } = useParams();
    const { articles } = useNewsContext();
    const article = articles.find(a => a.id === id);
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
                    {article?.title}
                </h1>

                <p className="text-sm text-gray-600 mb-8">
                    By <span className="font-medium text-gray-900">{article?.author}</span> • Published on {formatDate(article?.publishedAt || "")}
                </p>

                <div className=" rounded-lg  mb-8 flex items-center justify-center  w-[90%] h-[40%] md:w-full mx-auto">
                    <img src={article?.urlToImage} alt="" className='w-full rounded-2xl' />
                </div>

                <article className="prose prose-lg max-w-none mb-12 text-gray-700">
                    <p>
                        {trimContent(article?.content || "Content not available.")}
                    </p>
                    <a
                        href={article?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline mt-3 inline-block"
                    >
                        Read full article →
                    </a>
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
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                            <div className="flex">
                                <div className="flex items-center justify-center">
                                    <img src="/images/Screenshot (37).png" alt="" className='h-full w-40' />
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

                        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                            <div className="flex">
                                <div className="flex items-center justify-center">
                                    <img src="/images/Screenshot (37).png" alt="" className='h-full w-40' />
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