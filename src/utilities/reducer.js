export const groupListInitial = { groups: [] };
export const groupListReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_GROUPS':
            return { groups: action.groupList };

        case 'UPDATE_LIKE':
            const modifiedGroupList = [...state.groups];
            for(let i = 0; i < modifiedGroupList.length; i++) {
                if(modifiedGroupList[i]._id === action.changedGroup._id) {
                    modifiedGroupList[i] = action.changedGroup;
                    break;
                }
            }
            return { groups: modifiedGroupList };

        default:
            return state;
    }
};


export const loggedInUserInitial = { info: {} };
export const loggedInUserReducer = (state, action) => {
    const newInfo = {...state.info};;

    switch(action.type) {
        case 'SET_USER':
            return { info: action.userInfo };

        case 'REMOVE_USER':
            return { info: {} };

        case 'SET_BOOKMARK':
            newInfo.bookmarks = action.bookmarks;
            return { info: newInfo };

        case 'SET_LIKED_DESTINATION':
            newInfo.liked_destinations = action.newLikedDestinations;
            return { info: newInfo };

        case 'SET_LIKED_GROUP':
            newInfo.liked_groups = action.newLikedGroups;
            return { info: newInfo };

        default:
            return state;
    }
};