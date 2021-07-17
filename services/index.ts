import createAxios from "../utils/axios";

export const saveContaienr = () => createAxios().post("/api/container/save");

export const inviteToContainer = () =>
  createAxios().post("/api/container/:slug/invite");

export const removeInvitedUserFromContainer = () =>
  createAxios().post("/api/container/:slug/remove-invite/:id");

export const addAsset = () =>
  createAxios().post("/api/container/:slug/add-asset");

export const viewContainer = () =>
  createAxios().post("/api/container/preview/:slug?json=1");

export const removeAsset = () => createAxios().post("/api/remove-asset/:id");
