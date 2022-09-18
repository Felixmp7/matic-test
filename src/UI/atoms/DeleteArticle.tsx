import { generalSuccessResponseCode } from '@helpers/constants';
import API from '@services/api';

type Props = {
    mutateLatestArticles: () => void,
    articleId: string,
}

const handleDeleteArticle = async ({ articleId, mutateLatestArticles }: Props) => {
    try {
        const response = await API.public.deleteArticle(articleId);
        if (response.statusCode === generalSuccessResponseCode) {
            mutateLatestArticles();
        }
    } catch (error) {
        console.log(error);
    }
};

const DeleteArticle = ({ articleId, mutateLatestArticles }: Props) => (
    <button
        type="button"
        className="text-red-500"
        onClick={() => handleDeleteArticle({ articleId, mutateLatestArticles })}
    >
        Delete
    </button>
);

export default DeleteArticle;
