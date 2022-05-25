const Action = (type) => {
  const actionCreator = (payload) => ({
    type,
    payload,
  });
  actionCreator.type = type;
  return actionCreator;
};

export const loadInitialArt = Action("LOAD_INITIAL_ART");
export const loadMoreArt = Action("LOAD_MORE_ART");
