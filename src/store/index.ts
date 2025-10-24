import { articleType } from "@/constants/types/article";
import { create } from "zustand";

export type initialType = {
	articles: articleType[];
};

type actionType = {
	addArticle: (article: articleType) => void;
	setArticleList: (newList: articleType[]) => void;
};

const initial: initialType = {
	articles: [],
};

const useArticle = create<initialType & actionType>((set) => ({
	...initial,

	// actions
	setArticleList: (newList: articleType[]) => set({ articles: newList }),
	addArticle: (article: articleType) =>
		set((state: initialType) => ({
			articles: [...state.articles, article],
		})),
}));

export default useArticle;
