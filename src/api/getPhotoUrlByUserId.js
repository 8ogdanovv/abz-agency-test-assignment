export default function getPhotoUrlByUserId(user_id) {
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users/${user_id}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data.user.photo;
      } else {
        throw new Error(data.message);
      }
    });
}
