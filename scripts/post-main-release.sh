if [[ $(git rev-parse --abbrev-ref HEAD) != "main" ]]; then
  echo "******** Skipping Merge to Next (not master) ********"
  exit 0
fi

echo "****************** Updating Next ********************"
git fetch --all && \
git checkout next && \
git merge main && \
git push origin next && \
echo "****************** Updated Next *********************" && \
exit 0 # the command chain was successful
echo "*********** ERROR: Update of Next Failed ************"
exit 1 #if we get here one of the commands above failed
