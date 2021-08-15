import createAxios from "../utils/axios";
import { nanoid } from "nanoid";

export const saveContainer = (container: any) => {
  const slug = container.slug ? container.slug : nanoid();
  return createAxios().post("/api/container/save", {
    container: {
      ...container,
      access: JSON.stringify(container.access),
      assets: JSON.stringify(container.assets),
      slug,
    },
  });
};

export const inviteToContainer = () =>
  createAxios().post("/api/container/:slug/invite");

export const removeInvitedUserFromContainer = () =>
  createAxios().post("/api/container/:slug/remove-invite/:id");

export const addAsset = () =>
  createAxios().post("/api/container/:slug/add-asset");

export const viewContainer = () =>
  createAxios().post("/api/container/preview/:slug?json=1");

export const removeAsset = () => createAxios().post("/api/remove-asset/:id");
