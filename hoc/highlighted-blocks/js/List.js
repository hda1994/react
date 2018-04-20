'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoNew {...item} />
                );

            case 'article':
                return (
                    <ArticleNew {...item} />
                );
        }
    });
};
