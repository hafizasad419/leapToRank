$folders = "BrandIdentityAndWeb"

foreach ($folder in $folders) {
    # Create directory if it doesn't exist
    if (!(Test-Path $folder)) {
        New-Item -Path $folder -ItemType Directory -Force
    }

    # Create React component file
    @"
export default function $folder() {
    return <h1>$folder Page</h1>;
}
"@ | Set-Content -Path "$folder/index.jsx" -Encoding utf8
}
