var body = $response.body;

body = body.replace(/"vip_expire":"\d+/g, '"vip_expire":"2099');

$done({ body });
