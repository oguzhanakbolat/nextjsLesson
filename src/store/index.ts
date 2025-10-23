import { create } from "zustand";

const useArticle = create((set) => ({
	// initial state
	articles: [],

	// actions
	setArticleList: (newList: any[]) => set({ list: newList }),
	addArticle: (article: any) =>
		set((state: any) => ({ articles: [...state.articles, article] })),
}));

export default useArticle;
